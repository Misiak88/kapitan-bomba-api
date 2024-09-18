import { Controller, Get } from '@nestjs/common';
import { V2Service } from './v2.service';

@Controller('api/v2')
export class V2Controller {
  constructor(private readonly v2Service: V2Service) {}

  @Get('all-data')
  async getAllData() {
    return this.v2Service.getAllData();
  }
}
