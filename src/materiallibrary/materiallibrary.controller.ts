import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards,UseInterceptors,UploadedFile } from '@nestjs/common';
import { MateriallibraryService } from './materiallibrary.service';
import { CreateMateriallibraryDto } from './dto/create-materiallibrary.dto';
import { UpdateMateriallibraryDto } from './dto/update-materiallibrary.dto';
import {FileInterceptor} from '@nestjs/platform-express'
import {CreateInvitationPipe} from '../modules/auth/pipe/pipe.pipe'
import { AuthGuard } from '@nestjs/passport';

@Controller({
  path:'/api'
})
export class MateriallibraryController {
  constructor(private readonly materiallibraryService: MateriallibraryService) {}

  
  @Post()
  create(@Body() createMateriallibraryDto: CreateMateriallibraryDto) {
    return this.materiallibraryService.create(createMateriallibraryDto);
  }

  @Get()
  findAll() {
    return this.materiallibraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiallibraryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriallibraryDto: UpdateMateriallibraryDto) {
    return this.materiallibraryService.update(+id, updateMateriallibraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiallibraryService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/materiallibrary/label')
  getLabel() {
    return this.materiallibraryService.getLabel();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/materiallibrary/label')
  createLabel( @Body() body) {
    return this.materiallibraryService.createLabel(body);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  upload( @UploadedFile() file) {
    return this.materiallibraryService.upload(file);
  }
}
