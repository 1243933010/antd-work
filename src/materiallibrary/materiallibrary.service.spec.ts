import { Test, TestingModule } from '@nestjs/testing';
import { MateriallibraryService } from './materiallibrary.service';

describe('MateriallibraryService', () => {
  let service: MateriallibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MateriallibraryService],
    }).compile();

    service = module.get<MateriallibraryService>(MateriallibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
