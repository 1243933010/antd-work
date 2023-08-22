import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards,Request,Query } from '@nestjs/common';
import { EchartService } from './echart.service';
import { CreateEchartDto } from './dto/create-echart.dto';
import { UpdateEchartDto } from './dto/update-echart.dto';
import { AuthGuard } from '@nestjs/passport';
import {CreateInvitationPipe} from '../modules/auth/pipe/pipe.pipe'

@Controller('api/echart')
export class EchartController {
  constructor(private readonly echartService: EchartService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(CreateInvitationPipe) createEchartDto: CreateEchartDto,@Request() req) {
    return this.echartService.create(createEchartDto,req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
   findAll(@Query() query,@Request() req) {
    return this.echartService.findAll(query,req);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.echartService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body(CreateInvitationPipe) updateEchartDto: UpdateEchartDto) {
    return this.echartService.update(+id, updateEchartDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.echartService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/type/:id')
  findType(@Param('id') id: string) {
    return this.echartService.findType(+id);
  }
}
