import { Controller, Get, Post, Body, Patch, Request, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CommonModuleService } from './common-module.service';
import { CreateCommonModuleDto } from './dto/create-common-module.dto';
import { UpdateCommonModuleDto } from './dto/update-common-module.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller({
  path: '/api/common',
})
export class CommonModuleController {
  constructor(private readonly commonModuleService: CommonModuleService) { }



  // @Post()
  // create(@Body() createCommonModuleDto: CreateCommonModuleDto) {
  //   return this.commonModuleService.create(createCommonModuleDto);
  // }

  // @Get()
  // findAll() {
  //   return this.commonModuleService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.commonModuleService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommonModuleDto: UpdateCommonModuleDto) {
  //   return this.commonModuleService.update(+id, updateCommonModuleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commonModuleService.remove(+id);
  // }

  @UseGuards(AuthGuard('jwt'))
  @Post('/packageJson')
  package(@Body() body) {
    return this.commonModuleService.package(body);
  }

  @Get('/packageJson')
  getPackage() {
    return this.commonModuleService.getPackage();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/notice')
  getNotice(@Request() req) {
    return this.commonModuleService.getNotice(req);
  }
  
}
