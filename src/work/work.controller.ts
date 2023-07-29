import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards,Query ,Request} from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import {CreateInvitationPipe} from '../modules/auth/pipe/pipe.pipe'
import { AuthGuard } from '@nestjs/passport';

@Controller({
  path:'/api',
})

export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/work')
   create(@Body(CreateInvitationPipe) createWorkDto: CreateWorkDto,@Request() req) {
    return this.workService.create(createWorkDto,req.user);
  }

  @Get('/work')
  getWork(@Query() query: object) {
    return this.workService.getWork(query);
  }

  @Get('/work/tag')
  findWorkTag() {
    return this.workService.findWorkTag();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(+id);
  }
}
