import { Module } from '@nestjs/common';
import { V2Module } from './v2/v2.module';

@Module({
  imports: [V2Module],
  controllers: [],
  providers: [],
})
export class ApiModule {}
