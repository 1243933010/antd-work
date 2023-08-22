import { PartialType } from '@nestjs/mapped-types';
import { CreateEchartDto } from './create-echart.dto';
import {IsNotEmpty,IsString,IsArray, isArray,IsEmpty,IsOptional, IsNumber} from 'class-validator'

export class UpdateEchartDto extends PartialType(CreateEchartDto) {
    @IsNumber({})
    type:number

    devNum:string

    @IsNotEmpty({message:"masterNum不能为空"})
    masterNum:string

    @IsString({message:"参数必须为字符串"})
    time:string
}
