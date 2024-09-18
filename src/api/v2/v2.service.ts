import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from '../entities';

@Injectable()
export class V2Service {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
  ) {}

  async getAllData() {
    const quotes = await this.quotesRepository.find({
      relations: ['episode', 'quote_tags.tag', 'quote_characters.character'],
    });

    const formattedQuotes = quotes.map((quote) => ({
      ID: quote.id,
      quote_text: quote.quote_text,
      youtube_link: quote.youtube_link,
      timestamp: quote.timestamp,
      Episode: {
        title: quote.episode?.title,
        episode_number: quote.episode?.episode_number,
        air_date: quote.episode?.air_date,
        description: quote.episode?.description,
      },
      Characters: quote.quote_characters.map((qc) => ({
        name: qc.character?.name,
        description: qc.character?.description,
      })),
      Tags: quote.quote_tags.map((qt) => ({
        tag_name: qt.tag?.tag_name,
      })),
    }));

    return {
      quotes: formattedQuotes,
    };
  }
}
