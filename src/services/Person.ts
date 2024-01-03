import { randomUUID } from 'crypto';
import { AppDataSource } from '../database/data-source';
import { Person, UserRole } from '../database/entity/Person';
import { wishSchema } from '../utils/validations';

export default class PersonService {
  newWish = async (
    email: string,
    name: string,
    bookTitle: string,
    bookAuthor: string,
    role?: UserRole,
  ): Promise<Person> => {
    wishSchema({ email, name, bookTitle, bookAuthor, role });

    const wish = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Person)
      .values({
        id: randomUUID(),
        email,
        name,
        bookTitle,
        bookAuthor,
        role
      })
      .execute();

    const result = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where('person.id = :id', { id: wish.identifiers[0].id })
      .getOne();

    return result;
  };

  listAllWishes = async (): Promise<Person[]> => {
    const wishes = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .getMany();
    return wishes;
  };

  findWishesByBookTitle = async (title: string): Promise<Person[]> => {
    const wishes = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where('LOWER(person.bookTitle) LIKE LOWER(:title)', { title: `%${title}%` })
      .getMany();
    return wishes;
  };

  findWishesByPerson = async (name: string): Promise<Person[]> => {
    const wishes = await AppDataSource.getRepository(Person)
      .createQueryBuilder('person')
      .where('LOWER(person.name) LIKE LOWER(:name)', { name: `%${name}%` })
      .getMany();
    return wishes;
  };
}
