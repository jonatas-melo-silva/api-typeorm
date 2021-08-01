import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';

@Entity()
export default class Launch {
  constructor(value: number, description: string, date: Date, user: User) {
    this.value = value;
    this.description = description;
    this.date = date;
    this.user = user;
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  id: string;

  @Column({ type: 'float' })
  value: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @ManyToOne(() => User)
  user: User;
}
