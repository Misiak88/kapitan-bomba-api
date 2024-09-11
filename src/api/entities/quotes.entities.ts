import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { Character } from './characters.entities';
import { Episode } from './episodes.entities';
import { QuoteTag } from './quote_tags.entities';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  quote_text: string;

  @Column({ nullable: true })
  youtube_link: string;

  @Column({
    type: 'bigint',
    nullable: false,
  })
  timestamp: number;

  @ManyToOne(() => Character, (character) => character.quotes)
  character: Character;

  @ManyToOne(() => Episode, (episode) => episode.quotes)
  episode: Episode;

  @OneToMany(() => QuoteTag, (quoteTag) => quoteTag.quote)
  quoteTags: QuoteTag[];

  @BeforeInsert()
  setTimestamp() {
    this.timestamp = Math.floor(Date.now() / 1000);
  }
}
