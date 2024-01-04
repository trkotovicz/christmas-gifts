import { randomUUID } from 'crypto';
import { AppDataSource } from '../database/data-source';
import { Person, UserRole } from '../database/entity/Person';
import { wishSchema } from '../utils/validations';
import { Ebook } from '../database/entity/Ebook';
import { ErrorTypes } from '../errors/catalog';
import { PersonEbook } from '../database/entity/PersonEbook';

export default class PersonService {
  newWish = async (
    email: string,
    name: string,
    bookTitle: string,
    bookAuthor: string,
    role?: UserRole,
  ): Promise<Person> => {
    wishSchema({ email, name, bookTitle, bookAuthor, role });

    const result = await AppDataSource.transaction(async (transactionalEntityManager) => {
      const wish = await transactionalEntityManager
        .createQueryBuilder()
        .insert()
        .into(Person)
        .values({
          id: randomUUID(),
          email,
          name,
          bookTitle,
          bookAuthor,
          role,
        })
        .execute();

      const ebook = await transactionalEntityManager.getRepository(Ebook).findOne({
        where: {
          title: bookTitle,
          author: bookAuthor,
        },
      });

      if (!ebook) throw new Error(ErrorTypes.EbookNotInCatalog);

      const personEbook = new PersonEbook();
      personEbook.personId = wish.identifiers[0].id;
      personEbook.ebookId = ebook.id;
      await transactionalEntityManager.getRepository(PersonEbook).save(personEbook);

      return wish.identifiers[0].id;
    });

    const insertedWish = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where('person.id = :id', { id: result })
      .getOne();

    return insertedWish;
  };

  listAllWishes = async (): Promise<Person[]> => {
    const wishes = await AppDataSource.getRepository(Person).createQueryBuilder('person').getMany();
    return wishes;
  };

  findByWishId = async (id: string): Promise<Person[]> => {
    const wish = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where({ id })
      .getMany();
    return wish;
  };

  findWishesByBookTitle = async (title: string): Promise<Person[]> => {
    const wishes = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where('LOWER(person.bookTitle) LIKE LOWER(:title)', { title: `%${title}%` })
      .getMany();
    return wishes;
  };

  findWishesByPersonName = async (name: string): Promise<Person[]> => {
    const wishes = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where('LOWER(person.name) LIKE LOWER(:name)', { name: `%${name}%` })
      .getMany();
    return wishes;
  };

  findWishesByPersonEmail = async (email: string): Promise<Person[]> => {
    const wishes = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where('LOWER(person.email) = LOWER(:email)', { email })
      .getMany();
    return wishes;
  };

  listAllPersonEbook = async () => {
    const data = await AppDataSource.getRepository(PersonEbook)
      .createQueryBuilder('personEbook')
      .innerJoinAndSelect('personEbook.person', 'person')
      .innerJoinAndSelect('personEbook.ebook', 'ebook')
      .where('person.role = :role', { role: 'usuário padrão' })
      .getMany();
    return data;
  };

  listPersonEbookByEmail = async (email: string) => {
    const data = await AppDataSource.getRepository(PersonEbook)
      .createQueryBuilder('personEbook')
      .innerJoinAndSelect('personEbook.person', 'person')
      .innerJoinAndSelect('personEbook.ebook', 'ebook')
      .where('person.email = :email', { email })
      .getMany();
    return data;
  };
}
