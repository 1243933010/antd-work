import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { PrismaService } from '../prisma/prisma.service';
import { WorkTag } from '@prisma/client';
@Injectable()
export class WorkService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createWorkDto: CreateWorkDto, user: { id: number }) {
    console.log(user);
    try {
      let { workList, ...obj } = createWorkDto;
      obj.workType = +obj.workType;
      obj.tag = JSON.stringify(obj.tag);
      const transactionResult = await this.prisma.$transaction(async (prisma) => {
        const result = await prisma.work.create({
          data: { ...obj, userId: user.id },
        });
        const createdWorkListItems = await prisma.workList.createMany({
          data: workList.map((item) => ({ ...item, workId:result?.id})),
        });
  
        return { code: 0, message: '创建成功' }
      });
  
      return transactionResult; // 返回事务结果
    } catch (error) {
      return { code: 400, message: error };
    }
  }
  async getWork(query){
    let {pageSize,current,workType,time,startTime,endTime,tag,...obj} = query;
    time = JSON.stringify(time)
    let skip = pageSize*(current-1);
    let data = await this.prisma.work.findMany({
      where:{
        workType:workType?+workType:'',
        ...obj,
        startTime:{lte:endTime},
        endTime:{gte:startTime}
      },
      skip,
      take:+pageSize,
      include:{workList:true}
    })
    return data
  }
  findAll() {
    return `This action returns all work`;
  }

  findOne(id: number) {
    return `This action returns a #${id} work`;
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return `This action updates a #${id} work`;
  }

  remove(id: number) {
    return `This action removes a #${id} work`;
  }
  findWorkTag(){
   return  this.prisma.workTag.findMany();
  }
}
