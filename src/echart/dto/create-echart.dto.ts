import {IsNotEmpty,IsString,IsArray, isArray,IsEmpty,IsOptional, IsNumber} from 'class-validator'

export class CreateEchartDto {

    @IsNumber({})
    type:number

    devNum:string

    @IsNotEmpty({message:"masterNum不能为空"})
    masterNum:string

    @IsString({message:"参数必须为字符串"})
    time:string
    
}
