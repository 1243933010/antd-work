import { Injectable,Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from '../prisma/prisma.service';
import {User, Prisma} from '@prisma/client';
import { AuthService } from 'src/modules/auth/auth.service';
import  {LogoBody,TokenData} from './interface'
@Injectable()
export class UserService {
  constructor(private prisma:PrismaService){}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async login(AuthService:AuthService,body:LogoBody){
    console.log(body)
    let auth = await AuthService.validateUser(body.username,body.password);
    let tokens = await AuthService.certificate({username:auth.name,id:auth.userId})
    return tokens;
  }

  async findAll(username:string,password:string):Promise<User|any> {
    const users = await this.prisma.user.findFirst({
      where:{
        name:username,
        password
      }
    });
    return users;
  }

  async currentUser(req:TokenData){
    console.log(req.user)
    const userInfo = await this.prisma.user.findUnique({
      where:{
        userId:req.user.id
      }
    })
    return userInfo;
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
}
