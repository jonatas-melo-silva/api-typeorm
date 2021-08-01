import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Launch from './Launch';

@Entity()
export default class User {
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Launch, launch => launch.user)
  launches: Launch[];
}
