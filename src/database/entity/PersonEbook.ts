import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from './Person';
import { Ebook } from './Ebook';

@Entity()
export class PersonEbook {
  @PrimaryColumn()
  personId: string;

  @PrimaryColumn()
  ebookId: string;

  @ManyToOne(() => Person, (person) => person.id)
  @JoinColumn({ name: 'personId' })
  person: Person;

  @ManyToOne(() => Ebook, (ebook) => ebook.id)
  @JoinColumn({ name: 'ebookId' })
  ebook: Ebook;
}
