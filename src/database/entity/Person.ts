import { Column, Entity, PrimaryColumn } from "typeorm";

export enum UserRole {
  ADMIN = "St. Claus",
  USER = "usuário padrão"
}
@Entity()
export abstract class Person {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  gift: string;

  @Column({ type: "enum", enum: UserRole, nullable: false, default: UserRole.USER })
  role: UserRole;
}