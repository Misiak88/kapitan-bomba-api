import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Quote } from './quotes.entities';
import { Character } from './characters.entities';

@Entity('quote_characters')
export class QuoteCharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quote, (quote) => quote.quote_characters, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'quote_id' })  // Dodaj `JoinColumn` z nazwą kolumny w `snake_case`
  quote: Quote;

  @ManyToOne(() => Character, (character) => character.quote_characters, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'character_id' })  // Dodaj `JoinColumn` z nazwą kolumny w `snake_case`
  character: Character;
}
