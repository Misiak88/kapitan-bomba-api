import { DataSource } from 'typeorm';
import dataSource from './data-source';
import {
  Character,
  Episode,
  Quote,
  Tag,
  QuoteTag,
} from '../api/entities/index';
import seedData from './seeds/seed-data.json';

const seedDatabase = async () => {
  try {
    const AppDataSource: DataSource = await dataSource.initialize();

    console.log('Połączono z bazą danych.');

    // Insert Characters
    const characterRepository = AppDataSource.getRepository(Character);
    const characters = characterRepository.create(seedData.characters);
    await characterRepository.save(characters);
    console.log('Dodano postacie.');

    // Insert Episodes
    const episodeRepository = AppDataSource.getRepository(Episode);
    const episodes = episodeRepository.create(seedData.episodes);
    await episodeRepository.save(episodes);
    console.log('Dodano epizody.');

    // Insert Quotes
    const quoteRepository = AppDataSource.getRepository(Quote);

    const quotes = seedData.quotes.map((quoteData) => {
      const quote = new Quote();
      quote.quote_text = quoteData.quote_text;
      quote.youtube_link = quoteData.youtube_link;


      quote.character = characters.find(
        (char) => char.id === quoteData.character_id,
      );
      quote.episode = episodes.find((ep) => ep.id === quoteData.episode_id);

      return quote;
    });

    await quoteRepository.save(quotes);
    console.log('Dodano cytaty.');

    // Insert Tags
    const tagRepository = AppDataSource.getRepository(Tag);
    const tags = tagRepository.create(seedData.tags);
    await tagRepository.save(tags);
    console.log('Dodano tagi.');

    // Insert QuoteTags
    const quoteTagRepository = AppDataSource.getRepository(QuoteTag);
    const quoteTags = seedData.quote_tags.map((qtData) => {
      const quoteTag = new QuoteTag();
      quoteTag.quote = quotes.find((q) => q.id === qtData.quote_id);
      quoteTag.tag = tags.find((t) => t.id === qtData.tag_id);

      return quoteTag;
    });

    await quoteTagRepository.save(quoteTags);
    console.log('Dodano przypisania tagów do cytatów.');

    console.log('Seedowanie danych zakończone pomyślnie.');
    await AppDataSource.destroy();
  } catch (error) {
    console.error('Wystąpił błąd podczas seedowania danych:', error);
    process.exit(1);
  }
};

seedDatabase();
