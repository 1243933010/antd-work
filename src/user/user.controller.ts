import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TokenDto } from './dto/token.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/modules/auth/auth.service';
import { CreateInvitationPipe } from '../modules/auth/pipe/pipe.pipe';

@Controller({
  path: '/api',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);

  // }
  @Post('/login/account')
  logon(@Body() body) {
    return this.userService.login(this.authService, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/currentUser')
  currentUser(@Request() req) {
    return this.userService.currentUser(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/user/chart')
  // CreateInvitationPipe
  findOne(@Param() TokenDto: TokenDto) {
    // return this.userService.findOne(+id);
    return [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 114.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/login/outLogin')
  outLogin(@Param() Param: object) {
    return {};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/currentUser')
  getUserLabel(@Request() req) {
    return this.userService.currentUser(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/user')
  getUserList(@Request() req, @Query() query) {
    return this.userService.getUserList(req, query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/user')
  createUser(@Body(CreateInvitationPipe) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/user')
  updateUser(@Body(CreateInvitationPipe) createUserDto: CreateUserDto) {
    return this.userService.updateUser(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/project')
  getProject(@Request() req) {
    return this.userService.getProject(req);
  }
}
