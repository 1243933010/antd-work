import { Test, TestingModule } from '@nestjs/testing';
import { MateriallibraryController } from './materiallibrary.controller';
import { MateriallibraryService } from './materiallibrary.service';

describe('MateriallibraryController', () => {
  let controller: MateriallibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MateriallibraryController],
      providers: [MateriallibraryService],
    }).compile();

    controller = module.get<MateriallibraryController>(MateriallibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
