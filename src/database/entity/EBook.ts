import { Column, Entity, PrimaryColumn } from "typeorm";

export enum Language {
  ENGLISH = "inglês",
  PORTUGUESE = "português",
  SPANISH = "espanhol",
  FRENCH = "francês",
  ITALIAN = "italiano",
  GERMAN = "alemão"
}

export enum Category {
  SCIFI = "ficção",
  ROMANCE = "romance",
  FANTASY = "fantasia",
  HISTORY = "história",
  SELF_HELP = "auto ajuda",
  BUSINESS = "negócios",
  BIOGRAPHIES = "biografias",
  TEEN = "juvenil",
  CHILDREN = "infantil",
  THRILLER = "thriller",
  ARTS = "arts",
  COMIC_BOOKS = "HQ"
}

@Entity()
export abstract class EBook {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  title: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  author: string;

  @Column({ type: 'integer', nullable: true })
  year: number;

  @Column({ type: 'integer', nullable: false })
  pages: number;

  @Column({ type: 'enum', enum: Language, nullable: false })
  language: Language;

  @Column({ type: 'enum', enum: Category, nullable: false })
  category: Category;
}