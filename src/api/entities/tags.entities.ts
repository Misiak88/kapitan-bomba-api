import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Quote } from './quotes.entities';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag_name: string;

  @ManyToMany(() => Quote)
  @JoinTable({
    name: 'quote_tags',
    joinColumn: { name: 'tag_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'quote_id', referencedColumnName: 'id' },
  })
  quotes: Quote[];
}
