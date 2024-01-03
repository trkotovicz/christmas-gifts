import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Category } from '../../interfaces/Category';
import { Language } from '../../interfaces/Language';
import { PersonEbook } from './PersonEbook';

@Entity()
export abstract class Ebook {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  title: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  author: string;

  @Column({ type: 'integer', nullable: true })
  year: number;

  @Column({ type: 'integer', nullable: true })
  pages: number;

  @Column({ type: 'enum', enum: Language, nullable: false })
  language: Language;

  @Column({ type: 'enum', enum: Category, nullable: false })
  category: Category;

  @OneToMany(() => PersonEbook, (personEbook) => personEbook.ebook)
  personEbooks: PersonEbook[];
}
