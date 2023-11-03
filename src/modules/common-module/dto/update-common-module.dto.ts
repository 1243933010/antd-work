import { PartialType } from '@nestjs/mapped-types';
import { CreateCommonModuleDto } from './create-common-module.dto';

export class UpdateCommonModuleDto extends PartialType(CreateCommonModuleDto) {}
