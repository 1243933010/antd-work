import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { WorkModule } from './work/work.module';
@Module({
  imports: [UserModule,PrismaModule,AuthModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
