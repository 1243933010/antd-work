import { Injectable,Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prismaInt/prismaInt.service';
// import { Prisma} from '@prisma/client';
import { AuthService } from 'src/modules/auth/auth.service';
import  {LogoBody,TokenData} from './interface'
import {excludeField} from 'src/common/excludeField'
@Injectable()
export class UserService {
  constructor(private prisma:PrismaService){}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async login(AuthService:AuthService,body:LogoBody){
    let auth = await AuthService.validateUser(body.username,body.password);
    if(auth.code!==0){
      return auth
    }
   
    let tokens = await AuthService.certificate({username:auth.name,id:auth.id})
    
    return tokens;
  }

  async findAll(username:string,password:string):Promise<any> {
   
    const users = await this.prisma.user.findFirst(
      {
        where:{
          name:username,
          password
        }
      }
    );
    return users;
  }

  async currentUser(req:TokenData){
    const userInfo = await this.prisma.user.findFirst({
      where:{
        id:req.user.id,
        isShow:1,
      },
    })
    if(userInfo!==null){
      let user = excludeField(userInfo,['password','isShow'])
      return user;
    }

    
  }

  getUserList(req,query){
    console.log(query)
    let { pageSize, current,isShow,name,email, ...obj } = query;
    let skip = pageSize * (current - 1);
    let whereObj = {
      ...obj,
      name:{
        contains:name
      },
      email:{
        contains:email
      }
    }
    if(isShow){
      whereObj.isShow  = +isShow;
    }
    return this.prisma.user.findMany({
      skip,
      where:whereObj
    })
    return[]
  }

  async createUser(createUserDto){
    console.log(createUserDto)
    let result = await this.prisma.user.create({data:createUserDto})
    if(result){
      return {message:'创建成功'}
    }
    

  }

  async updateUser(createUserDto){
    let result = await this.prisma.user.update({
      where:{
        id:createUserDto.id,
        
      },
      data:createUserDto
    })
    if(result){
      return {message:'更新成功'}
    }
    return {code:400,message:'更新失败'}
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getProject(req){
    let result = await this.prisma.projectModel.findMany({ where:{}})
    if(result){
      return {code:0,list:result}
    }
    return {code:0,list:[]}
  }
}
