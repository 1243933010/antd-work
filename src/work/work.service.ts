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
  create(createWorkDto: CreateWorkDto) {
    return 'This action adds a new work';
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
  labelList(){
    return  this.prisma.workTag.findMany();
  }
}
