import {IsNotEmpty,IsString,IsArray} from 'class-validator'

export class TokenDto{

    @IsString({message:'名称要为字符串'})
    @IsNotEmpty({message:'名称不能为空'})
    username:string;

    @IsString()
    @IsNotEmpty({message:'密码不能为空'})
    password:string
}