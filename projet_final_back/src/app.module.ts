import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrawlStarsController } from './brawlstars/brawlstars.controller';

@Module({
  imports: [],
  controllers: [AppController, BrawlStarsController],
  providers: [AppService],
})
export class AppModule {}
