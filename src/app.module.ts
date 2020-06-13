import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DollarController } from './dollar/dollar.controller';

@Module({
  imports: [],
  controllers: [AppController, DollarController],
  providers: [AppService],
})
export class AppModule {}
