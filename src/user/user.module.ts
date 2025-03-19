import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import {PrismaService} from '../prisma/prisma.service'
import { AuthService } from '../modules/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  controllers: [UserController],
  providers: [UserService, AuthService, JwtService],
})
export class UserModule {}
