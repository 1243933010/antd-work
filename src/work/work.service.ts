import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class WorkService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createWorkDto: CreateWorkDto, user: { id: number }) {
    // console.log(user,'=======')
    try {
      let { workList,tag, ...obj } = createWorkDto;
      obj.workType = +obj.workType;
      const transactionResult = await this.prisma.$transaction(async (prisma) => {
        const result = await prisma.work.create({
          data: {  ...obj,userId:user.id,},
        });
       
        const createdWorkListItems = await prisma.workList.createMany({
          data: workList.map((item) => ({ ...item, workId:result?.id})),
        });
       
        let tagList = [];
        if(tag.length>0){
          for (const tagData of tag) {
            let obj = {workId: result.id, workTagId: +tagData.key, }
            tagList.push(obj);
          }
          let status =  await prisma.workToWorkTag.createMany({ data:tagList });
          console.log(status)
        }
        return { code: 0, message: '创建成功' }
      });
      return transactionResult; // 返回事务结果
    } catch (error) {
      console.log(error)
      return { code: 400, message: error };
    }
  }
  async getWork(query,user){
    let {pageSize,current,workType,startTime,endTime,tag=undefined,...obj} = query;
    let skip = pageSize*(current-1);
    const whereObject = {
      workType:workType?+workType:undefined,
      isShow:true,
        ...obj,
        startTime:{lte:endTime},
        endTime:{gte:startTime},
    }
    if(tag){
      whereObject.OR=tag.map(item => {
        const parsedItem = JSON.parse(item);
        const workTagId = +parsedItem.key;
        return {
          workTags: {
            some: {
              workTagId,
            },
          },
        };
      })
    }
    let data = await this.prisma.work.findMany({
      where:whereObject,
      skip,
      take:+pageSize,
      include: {
        workList: true, // 加载 work_list 关联模型的信息
        workTags: {
          include:{
            workTag:true
          }
        }
      },
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
