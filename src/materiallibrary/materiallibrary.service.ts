import { Injectable } from '@nestjs/common';
import { CreateMateriallibraryDto } from './dto/create-materiallibrary.dto';
import { UpdateMateriallibraryDto } from './dto/update-materiallibrary.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MateriallibraryService {
  constructor(private prisma:PrismaService){}
  create(createMateriallibraryDto: CreateMateriallibraryDto) {
    return 'This action adds a new materiallibrary';
  }

  findAll() {
    return `This action returns all materiallibrary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} materiallibrary`;
  }

  update(id: number, updateMateriallibraryDto: UpdateMateriallibraryDto) {
    return `This action updates a #${id} materiallibrary`;
  }

  remove(id: number) {
    return `This action removes a #${id} materiallibrary`;
  }

 async getLabel(){
  let data = await this.prisma.materialLibraryClassification.findMany();
  return data
  }

  async createLabel(body){
    // let {materialLibrary } = body;
    console.log(body)
    let data = await this.prisma.materialLibraryClassification.create({
      data:{label:body.materialLibrary}
    })
    return data
  }

  async upload(file:{filename:string}){
    console.log(process.env.UPLOAD_URL,'---')
    return {url:`${process.env.UPLOAD_URL}/images/${file.filename}`}
  }
}
