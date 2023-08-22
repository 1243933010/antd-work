import { Test, TestingModule } from '@nestjs/testing';
import { EchartController } from './echart.controller';
import { EchartService } from './echart.service';

describe('EchartController', () => {
  let controller: EchartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EchartController],
      providers: [EchartService],
    }).compile();

    controller = module.get<EchartController>(EchartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
