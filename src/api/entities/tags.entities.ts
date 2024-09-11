import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { QuoteTag } from './quote_tags.entities';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag_name: string;

  @OneToMany(() => QuoteTag, (quoteTag) => quoteTag.tag)
  quoteTags: QuoteTag[];
}
