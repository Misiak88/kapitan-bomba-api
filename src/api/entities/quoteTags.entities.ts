import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Quote } from './quotes.entities';
import { Tag } from './tags.entities';

@Entity('quote_tags')
export class QuoteTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quote, (quote) => quote.quote_tags)
  @JoinColumn({ name: 'quote_id' })  // Dodaj `JoinColumn` z nazwą kolumny w `snake_case`
  quote: Quote;

  @ManyToOne(() => Tag, (tag) => tag.quote_tags)
  @JoinColumn({ name: 'tag_id' })  // Dodaj `JoinColumn` z nazwą kolumny w `snake_case`
  tag: Tag;
}
