import 'dotenv/config';
import * as fs from 'fs';
import { AppDataSource } from './data-source';
import { Ebook } from './entity/EBook';
import { Person } from './entity/Person';

async function populateDatabase() {
  try {
    // Inicializa a conexão do TypeORM antes de fazer operações no banco de dados
    await AppDataSource.initialize();

    // Leitura do arquivo db.json
    const jsonData = fs.readFileSync('src/database/seedsDB.json', 'utf-8');
    const data = JSON.parse(jsonData);

    console.log(data);

    // Inserção dos dados no banco utilizando as entidades
    await AppDataSource.getRepository(Ebook).save(data.Ebooks);
    await AppDataSource.getRepository(Person).save(data.Users);

    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  }
}

populateDatabase()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
