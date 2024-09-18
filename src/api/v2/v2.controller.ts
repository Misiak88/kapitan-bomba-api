// src/api/v2/v2.controller.ts
import { Controller, Get } from '@nestjs/common';
import { V2Service } from './v2.service';

@Controller('api/v2')
export class V2Controller {
  constructor(private readonly v2Service: V2Service) {}

  // Endpoint GET api/v2/all-data
  @Get('all-data')
  async getAllData() {
    return this.v2Service.getAllData();
  }

  // Nowy endpoint GET api/v2/random-quote
  @Get('random-quote')
  async getRandomQuote() {
    return this.v2Service.getRandomQuote();
  }
}
