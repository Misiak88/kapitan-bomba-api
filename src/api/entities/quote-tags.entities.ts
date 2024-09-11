import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Quote } from './quotes.entities';
import { Tag } from './tags.entities';

@Entity('quote_tags')
export class QuoteTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quote)
  quote: Quote;

  @ManyToOne(() => Tag)
  tag: Tag;
}
