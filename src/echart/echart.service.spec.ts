import { Test, TestingModule } from '@nestjs/testing';
import { EchartService } from './echart.service';

describe('EchartService', () => {
  let service: EchartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EchartService],
    }).compile();

    service = module.get<EchartService>(EchartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
