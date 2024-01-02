import { randomUUID } from 'node:crypto';
import { AppDataSource } from '../database/data-source';
import { Ebook } from '../database/entity/EBook';
import { Language } from '../interfaces/Language';
import { Category } from '../interfaces/Category';
import { ebookSchema } from '../utils/validations';

export default class EbookService {
  newEbook = async (
    title: string,
    author: string,
    year: number,
    pages: number,
    language: Language,
    category: Category,
  ): Promise<Ebook> => {
    ebookSchema({ title, author, year, pages, language, category });
    
    const ebook = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Ebook)
      .values({
        id: randomUUID(),
        title,
        author,
        year,
        pages,
        language,
        category,
      })
      .execute();

    const result = await AppDataSource.getRepository(Ebook)
      .createQueryBuilder('ebook')
      .where('ebook.id = :id', { id: ebook.identifiers[0].id })
      .getOne();

    return result;
  };

  listAll = async (): Promise<Ebook[]> => {
    const ebooks = await AppDataSource.getRepository(Ebook).createQueryBuilder('ebook').getMany();
    return ebooks;
  };

  findByTitle = async (title: string): Promise<Ebook[]> => {
    const ebooks = await AppDataSource.getRepository(Ebook)
      .createQueryBuilder('ebook')
      .where('LOWER(ebook.title) LIKE LOWER(:title)', { title: `%${title}%` })
      .getMany();
    return ebooks;
  };

  findByAuthor = async (author: string): Promise<Ebook[]> => {
    const ebooks = await AppDataSource.getRepository(Ebook)
      .createQueryBuilder('ebook')
      .where('LOWER(ebook.author) LIKE LOWER(:author)', { author: `%${author}%` })
      .getMany();
    return ebooks;
  };

  findByCategory = async (category: Category): Promise<Ebook[]> => {
    const ebooks = await AppDataSource.getRepository(Ebook)
      .createQueryBuilder('ebook')
      .where('ebook.category = :category', { category })
      .getMany();
    return ebooks;
  };
}
