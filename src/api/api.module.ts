import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import {
  Character,
  Episode,
  Quote,
  Tag,
  QuoteTag,
  QuoteCharacter,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Character,
      Episode,
      Quote,
      Tag,
      QuoteTag,
      QuoteCharacter,
    ]),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
