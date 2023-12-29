import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Person } from './entity/Person';
import { EBook } from './entity/EBook';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Person, EBook],
  migrations: ['src/database/migration/*.ts'],
  // ssl: { rejectUnauthorized: false },
  subscribers: [],
});
