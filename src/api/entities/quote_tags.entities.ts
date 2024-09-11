import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Quote } from './quotes.entities';
import { Tag } from './tags.entities';

@Entity('quote_tags')
export class QuoteTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quote, (quote) => quote.quoteTags)
  quote: Quote;

  @ManyToOne(() => Tag, (tag) => tag.quoteTags)
  tag: Tag;
}
