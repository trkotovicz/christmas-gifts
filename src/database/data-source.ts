import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Ebook } from './entity/Ebook';
import { Person } from './entity/Person';
import { PersonEbook } from './entity/PersonEbook';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Person, Ebook, PersonEbook],
  subscribers: [],
});
