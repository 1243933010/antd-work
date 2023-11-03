import { Module } from '@nestjs/common';
import { CommonModuleService } from './common-module.service';
import { CommonModuleController } from './common-module.controller';

@Module({
  controllers: [CommonModuleController],
  providers: [CommonModuleService]
})
export class CommonModuleModule {}
