import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Request,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { CreateInvitationPipe } from '../modules/auth/pipe/pipe.pipe';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller({
  path: '/api',
})
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/work')
  create(
    @Body(CreateInvitationPipe) createWorkDto: CreateWorkDto,
    @Request() req,
  ) {
    return this.workService.create(createWorkDto, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/work')
  getWork(@Query() query: object, @Request() req) {
    return this.workService.getWork(query, req.user);
  }

  @Get('/work/tag')
  findWorkTag() {
    return this.workService.findWorkTag();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/work/:id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.workService.findOne(+id, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/work/:id')
  update(
    @Param('id') id: string,
    @Body(CreateInvitationPipe) updateWorkDto: UpdateWorkDto,
    @Request() req,
  ) {
    return this.workService.update(+id, updateWorkDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/work/:id')
  remove(@Param('id') id: string) {
    return this.workService.remove(+id);
  }

  // @Post('/uploadFile')
  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile( @UploadedFile() file) {
  //   return this.workService.getXlsxData(file);
  // }
}
