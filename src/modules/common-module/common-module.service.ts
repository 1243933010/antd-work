import { Injectable } from '@nestjs/common';
import { CreateCommonModuleDto } from './dto/create-common-module.dto';
import { UpdateCommonModuleDto } from './dto/update-common-module.dto';
import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class CommonModuleService {
  constructor(private prisma:PrismaService){}
  create(createCommonModuleDto: CreateCommonModuleDto) {
    return 'This action adds a new commonModule';
  }

  findAll() {
    return `This action returns all commonModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commonModule`;
  }

  update(id: number, updateCommonModuleDto: UpdateCommonModuleDto) {
    return `This action updates a #${id} commonModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} commonModule`;
  }

  async package(body){
    console.log(body,'---')
    try {
      let data = await this.prisma.packageTable.update({
        where:{id:1},
        data:{
          shopToken:body.token
        }
      })
      if(data){
        return {code:0,message:'更新成功'}
      }
      
    } catch (error) {
      return {code:400,message:error.name}
    }
  }

  async getPackage(){
    return {code:0,message:'success',data:{}}
    // console.log('11111111')
    // let data = await this.prisma.packageTable.findFirst();
    // console.log(data,'===')
    // if(data){
    //   return {code:0,data:{shopToken:data.shopToken}}
    // }
    // return {code:400}
  }

  async getNotice(req){
    return {code:0,data:[]}
  }
}
