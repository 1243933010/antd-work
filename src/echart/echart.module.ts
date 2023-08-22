import { Module } from '@nestjs/common';
import { EchartService } from './echart.service';
import { EchartController } from './echart.controller';

@Module({
  controllers: [EchartController],
  providers: [EchartService]
})
export class EchartModule {}
