import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Character } from './characters.entities';
import { Episode } from './episodes.entities';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  quote_text: string;

  @ManyToOne(() => Character, (character) => character.quotes)
  character: Character;

  @ManyToOne(() => Episode, (episode) => episode.quotes)
  episode: Episode;

  @Column({ nullable: true })
  youtube_link: string;

  @Column('int', { nullable: true })
  timestamp: number;
}
