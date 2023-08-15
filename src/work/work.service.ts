import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class WorkService {
  constructor(
    private prisma: PrismaService
  ) { }
  async create(createWorkDto: CreateWorkDto, user: { id: number }) {
    // console.log(user,'=======')
    try {
      let { workList, tag, ...obj } = createWorkDto;
      obj.workType = +obj.workType;
      const transactionResult = await this.prisma.$transaction(async (prisma) => {
        const result = await prisma.work.create({
          data: { ...obj, userId: user.id, },
        });

        if (workList.length) {
          const createdWorkListItems = await prisma.workList.createMany({
            data: workList.map((item) => ({ ...item, workId: result?.id })),
          });
        }

        let tagList = [];
        if (tag.length > 0) {
          for (const tagData of tag) {
            let obj = { workId: result.id, workTagId: +tagData.key, }
            tagList.push(obj);
          }
          let status = await prisma.workToWorkTag.createMany({ data: tagList });
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
  async getWork(query, user) {
    let { pageSize, current, workType, startTime, endTime, tag = undefined, ...obj } = query;
    let skip = pageSize * (current - 1);
    const whereObject = {
      workType: workType ? +workType : undefined,
      isShow: true,
      ...obj,
      startTime: { lte: endTime },
      endTime: { gte: startTime },
    }
    if (tag) {
      whereObject.OR = tag.map(item => {
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
    let total = await this.prisma.work.count({
      where: whereObject,
    })
    let data: any = await this.prisma.work.findMany({
      where: whereObject,
      skip,
      take: +pageSize,
      include: {
        workList: true, // 加载 work_list 关联模型的信息
        // workTags:true
        workTags: {
          include: {
            workTag: true
          }
        }
      },
    })
    return {
      data,
      total: total
    }
  }
  findAll() {
    return `This action returns all work`;
  }

  async findOne(id: number, user) {
    let data = await this.prisma.work.findFirst({
      where: {
        userId: user.id,
        id
      },
      include: {
        workList: true,
        workTags: {
          include: {
            workTag: true
          }
        }
      }
    })
    console.log(data)
    if (data.workTags.length) {
      let arr = [];
      data.workTags.forEach(val => arr.push(val.workTag))
      data.workTags = arr;
    }
    return data;
  }

  async update(id: number, updateWorkDto: UpdateWorkDto) {
    let { mounthTime, startTime, endTime, workType, tag, workList } = updateWorkDto;
    try {
      const transactionResult = await this.prisma.$transaction(async (prisma) => {
        if (workList.length) {
          // console.log(workList)
          for (const val of workList) {
            let status = await this.prisma.workList.upsert({
              where: { id: val.id },
              update: val,
              create:{value:val.value,workId:id}
            });
           console.log(status)
          }
          
        }
        let tagList = [];
        if (tag.length > 0) {
          for (const tagData of tag) {
            let obj = { workId: id, workTagId: +tagData.key, }
            tagList.push(obj);
          }
          let sta = await this.prisma.workToWorkTag.deleteMany({
            where: { workId: id }
          })
          let status = await prisma.workToWorkTag.createMany({ data: tagList });
        }
        await this.prisma.work.update({
          where: { id },
          data: { mounthTime, startTime, endTime, workType, }
        })
        return { code: 0, message: '更新成功' };
      })
      return transactionResult;


    } catch (error) {
      return { code: 400, message: error.name }
    }
  }

  async remove(id: number) {
    let status = await this.prisma.work.update({
      where: { id },
      data: {
        isShow: false,
      }
    })
    console.log(status)
    if (status) {
      return { code: 0, message: '删除成功' }
    }
    return { code: 400, message: '删除失败' }
  }
  findWorkTag() {
    return this.prisma.workTag.findMany();
  }
}
