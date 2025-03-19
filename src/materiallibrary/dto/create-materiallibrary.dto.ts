import {
  IsNotEmpty,
  IsString,
  IsArray,
  isArray,
  IsEmpty,
  IsOptional,
  isNotEmpty,
  isEmpty,
} from 'class-validator';
export class CreateMateriallibraryDto {
  @IsNotEmpty({ message: 'fileList不能为空' })
  @IsArray({ context: 'fileList必须是数组' })
  fileList: string[];

  @IsNotEmpty({ message: 'labelId不能为空' })
  labelId: number;
}
