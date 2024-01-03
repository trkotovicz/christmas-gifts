import 'dotenv/config';
import * as fs from 'fs';
import { AppDataSource } from './data-source';
import { Ebook } from './entity/Ebook';
import { Person } from './entity/Person';
import { PersonEbook } from './entity/PersonEbook';

async function populateDatabase() {
  try {
    await AppDataSource.initialize();

    const jsonData = fs.readFileSync('src/database/seedsDB.json', 'utf-8');
    const data = JSON.parse(jsonData);

    await AppDataSource.getRepository(Ebook).save(data.Ebooks);

    for (const user of data.Users) {
      const person = await AppDataSource.getRepository(Person).save(user);

      const ebook = await AppDataSource.getRepository(Ebook).findOne({
        where: {
          title: user.bookTitle,
          author: user.bookAuthor,
        },
      });

      if (ebook) {
        const personEbook = new PersonEbook();
        personEbook.personId = person.id;
        personEbook.ebookId = ebook.id;
        await AppDataSource.getRepository(PersonEbook).save(personEbook);
      }
    }

    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  }
}

populateDatabase()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
