import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BeforeInsert,
  JoinColumn,
} from 'typeorm';
import { Episode } from './episodes.entities';
import { QuoteTag } from './quoteTags.entities';
import { QuoteCharacter } from './quoteCharacters.entities';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  quote_text: string;

  @Column({ nullable: true })
  youtube_link: string;

  @Column({ type: 'bigint', nullable: false })
  timestamp: number;

  @ManyToOne(() => Episode, (episode) => episode.quotes)
  @JoinColumn({ name: 'episode_id' })  // Dodaj `JoinColumn` z nazwą kolumny w `snake_case`
  episode: Episode;

  @OneToMany(() => QuoteTag, (quoteTag) => quoteTag.quote)
  quote_tags: QuoteTag[];

  @OneToMany(() => QuoteCharacter, (quoteCharacter) => quoteCharacter.quote)
  quote_characters: QuoteCharacter[];

  @BeforeInsert()
  setTimestamp() {
    this.timestamp = Math.floor(Date.now() / 1000);
  }
}
