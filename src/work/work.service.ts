import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { PrismaService } from '../prisma/prisma.service';
const XlsxPopulate = require('xlsx-populate');
@Injectable()
export class WorkService {
  constructor(
    private prisma: PrismaService
  ) { }
  async create(createWorkDto: CreateWorkDto, user: { id: number }) {
    try {
      let { workList, tag, ...obj } = createWorkDto;
      obj.workType = +obj.workType;
      const transactionResult = await this.prisma.$transaction(async (prisma) => {
        const result = await prisma.work.create({
          data: { ...obj, userId: user.id, },
        });

        if (workList.length) {
          await prisma.workList.createMany({
            data: workList.map((item) => ({ ...item, workId: result?.id })),
          });
        }

        let tagList = [];
        if (tag?.length > 0) {
          for (const tagData of tag) {
            let obj = { workId: result.id, workTagId: +tagData.key, }
            tagList.push(obj);
          }
           await prisma.workToWorkTag.createMany({ data: tagList });
        }
        return { code: 0, message: '创建成功' }
      });
      return transactionResult; // 返回事务结果
    } catch (error) {
      console.log(error)
      return { code: 400, message: error.name };
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
        workList: {
          where:{
            isShow:true
          }
        }, // 加载 work_list 关联模型的信息
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
        workList: {
          where:{
            isShow:true
          }
        },
        workTags: {
          include: {
            workTag: true
          }
        }
      }
    })
    // console.log(data)
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
          const workIdToRemove = workList.map((data) => data.id);  //拿到前端传来的worklist数组内的id
          await prisma.workList.deleteMany({     //删除workid一直的数据不在前端传来的id数组内的数据
            where: {workId:id,
              id: {
                notIn:workIdToRemove
              },
            },
          });
          for (const val of workList) {  //循环根据有无id决定是更新还是添加
            if (val.id) {
              // 存在 id，则执行更新操作
              await prisma.workList.update({
                where: { id: val.id },
                data: {...val,isShow:true},
              });
            } else {
              // 不存在 id，则执行创建操作
              await prisma.workList.create({
                data: { value: val.value, workId: id },
              });
            }
          }
          
        }
        let tagList = [];
        if (tag.length > 0) {
          for (const tagData of tag) {
            let obj = { workId: id, workTagId: +tagData.key, }
            tagList.push(obj);
          }
          await this.prisma.workToWorkTag.deleteMany({
            where: { workId: id }
          })
          await prisma.workToWorkTag.createMany({ data: tagList });
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

  async getXlsxData(file){
   let workbook = await  XlsxPopulate.fromDataAsync(file.buffer);
   const sheet = workbook.sheet(0); // 获取第一个工作表
   
    // 获取数据范围的值
    const usedRangeValues = sheet.usedRange().value();

    let sliceIndex = 0;
    let length = usedRangeValues[0].filter((val)=>val).length;
    if(length<5){
      sliceIndex = 1;
    }
    // 获取数据行的数据
    const dataRows = usedRangeValues.slice(sliceIndex); // 跳过标题行
    const data = [];

    let columKey = [];
    dataRows[0].forEach(val=>{
      columKey.push(val);
    })
    
    // 遍历每一行的数据，创建对象并添加到数据数组中
    for(let i =1;i<dataRows.length;i++){
      const obj = {};
      for(let j = 0;j<dataRows[i].length;j++){
        // const fieldName = 'Column ' + (j + 1);
        if(dataRows[i][0]){
          obj[columKey[j]] = dataRows[i][j];
        }else{
          break
        }
        
      }
      if(Object.keys(obj).length>0){
        data.push(obj);
      }
    }
    console.log(data)
    return {data};
    
  }
}
