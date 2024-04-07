import { Controller, Get } from '@nestjs/common';
import * as brawlStarsData from '../../data/API_Brawlers.json';

@Controller('brawlstars')
export class BrawlStarsController {
  @Get()
  findAll(): any {
    return brawlStarsData;
  }

  //Endpoint 2 à rajouter
}