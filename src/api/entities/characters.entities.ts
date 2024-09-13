import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { QuoteCharacter } from './quoteCharacters.entities';

@Entity('characters')
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => QuoteCharacter, (quoteCharacter) => quoteCharacter.character)
  quote_characters: QuoteCharacter[];
}
