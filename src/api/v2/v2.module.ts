import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { V2Service } from './v2.service';
import { V2Controller } from './v2.controller';
import {
  Character,
  Episode,
  Quote,
  Tag,
  QuoteTag,
  QuoteCharacter,
} from '../entities';

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
  controllers: [V2Controller],
  providers: [V2Service],
})
export class V2Module {}
