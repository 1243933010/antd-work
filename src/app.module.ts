import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaInitModule } from './prismaInt/prismaInt.module';
import { AuthModule } from './modules/auth/auth.module';
import { WorkModule } from './work/work.module';
import { EchartModule } from './echart/echart.module';
import { MateriallibraryModule } from './materiallibrary/materiallibrary.module';
import { CommonModuleModule } from './modules/common-module/common-module.module';

import { ConfigModule, ConfigService } from '@nestjs/config';

const envFilePath = ['.env'];
if (process.env.NODE_ENV == 'dev') {
  envFilePath.push('.env.dev');
} else {
  envFilePath.push('.env.pro');
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
    }),
    UserModule,
    PrismaInitModule,
    AuthModule,
    WorkModule,
    EchartModule,
    MateriallibraryModule,
    CommonModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
