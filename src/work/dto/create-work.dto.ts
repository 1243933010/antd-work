import {IsNotEmpty,IsString,IsArray, isArray,IsEmpty,IsOptional} from 'class-validator'

export class CreateWorkDto {

    @IsOptional()
    mounthTime:string

    @IsOptional()
    startTime:string

    @IsOptional()
    endTime:string

    @IsNotEmpty({message:'workType不能为空'})
    workType:number

   
    @IsArray({message:'tag必须格式是数组'})
    @IsOptional()
    tag:{key:number}[]

   
    @IsArray({message:'workList必须格式是数组'})
    @IsOptional()
    workList:{value:string}[]
}
