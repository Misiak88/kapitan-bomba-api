import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Quote } from './quotes.entities';

@Entity('episodes')
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  episode_number: number;

  @Column({ type: 'date' })
  air_date: Date;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Quote, (quote) => quote.episode)
  quotes: Quote[];
}
