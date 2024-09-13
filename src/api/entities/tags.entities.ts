import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { QuoteTag } from './quoteTags.entities';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag_name: string;

  @OneToMany(() => QuoteTag, (quoteTag) => quoteTag.tag)
  quote_tags: QuoteTag[];
}
