import { PartialType } from '@nestjs/mapped-types';
import { CreateMateriallibraryDto } from './create-materiallibrary.dto';

export class UpdateMateriallibraryDto extends PartialType(CreateMateriallibraryDto) {}
