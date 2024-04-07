import { Test, TestingModule } from '@nestjs/testing';
import { BrawlStarsController } from './brawlstars.controller';

describe('BrawlStarsController', () => {
  let controller: BrawlStarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrawlStarsController],
    }).compile();

    controller = module.get<BrawlStarsController>(BrawlStarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
