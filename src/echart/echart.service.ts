import { Injectable } from '@nestjs/common';
import { CreateEchartDto } from './dto/create-echart.dto';
import { UpdateEchartDto } from './dto/update-echart.dto';
import { PrismaService } from '../prismaInt/prismaInt.service';

@Injectable()
export class EchartService {
  constructor(private primsa: PrismaService) {}
  async create(createEchartDto: CreateEchartDto, user) {
    console.log(user);
    try {
      const data = await this.primsa.echartTable.findFirst({
        where: {
          type: createEchartDto.type,
          time: createEchartDto.time,
          isShow: true,
        },
      });
      if (data && data.id) {
        return { code: 400, message: '当前类型当天已经创建有数据' };
      }
      await this.primsa.echartTable.create({
        data: { ...createEchartDto, isShow: true, userId: user.id },
      });
      return { message: '创建成功' };
    } catch (error) {
      return { code: 400, message: error.name };
    }
  }

  async findAll(query, req) {
    const data = await this.primsa.echartTable.findMany({
      where: {
        userId: req.user.id,
        isShow: true,
        type: query.type ? +query.type : undefined,
      },
      orderBy: {
        time: 'asc', // 或 'desc'，根据您需要的升序或降序排序
      },
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} echart`;
  }

  async update(id: number, updateEchartDto: UpdateEchartDto) {
    const result = await this.primsa.echartTable.update({
      where: { id },
      data: updateEchartDto,
    });
    if (result) {
      return { code: 0, message: '修改成功' };
    }
    return { code: 400, message: '错误' };
    // return `This action updates a #${id} echart`;
  }

  async remove(id: number) {
    const data = await this.primsa.echartTable.update({
      where: {
        id: id,
      },
      data: {
        isShow: false,
      },
    });
    return { code: 0, message: '删除成功' };
  }

  async findType(id: number) {
    let data;
    if (id) {
      data = await this.primsa.echartDictionary.findFirst({
        where: {
          typeId: id,
        },
      });
    } else {
      data = await this.primsa.echartDictionary.findMany();
    }
    return data || [];
  }
}
