import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkDto } from './create-work.dto';
import {
  IsNotEmpty,
  IsString,
  IsArray,
  isArray,
  IsEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateWorkDto extends PartialType(CreateWorkDto) {
  @IsNotEmpty({ message: 'id不能为空' })
  id: number;

  @IsNotEmpty({ message: 'userId不能为空' })
  userId: number;

  @IsOptional()
  mounthTime: string;

  @IsOptional()
  startTime: string;

  @IsOptional()
  endTime: string;

  @IsNotEmpty({ message: 'workType不能为空' })
  workType: number;

  @IsArray({ message: 'tag必须格式是数组' })
  @IsOptional()
  tag: { key: number }[];

  @IsArray({ message: 'workList必须格式是数组' })
  @IsOptional()
  workList: {
    id: number;
    value: string;
  }[];
}
