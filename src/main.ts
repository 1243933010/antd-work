import { NestFactory } from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express'
import { AppModule } from './app.module';
import {VersioningType} from '@nestjs/common'
import { join } from 'path'
import {Respon} from './common/response'
import {HttpFilter} from './common/filter'
import  {WinstonClass} from './common/winston';
import {Request,Response,NextFunction } from 'express'

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{
    logger:['error','warn','log']
  });
  app.enableVersioning({    //给当前所有接口添加版本前缀比如/v1
    type:VersioningType.URI
  })

  function MiddleWareAll(req:Request,res:Response,next:NextFunction){  //全局中间件
    console.log(`全局中间件:当前请求接口${req.originalUrl}`);
    next();
  }

  app.useStaticAssets(join(__dirname,'./../src/images'),{
    prefix:'/images'
  })
  app.useGlobalInterceptors(new Respon(WinstonClass()));  //全局响应拦截
  app.useGlobalFilters(new HttpFilter(WinstonClass()));   //全局异常过滤器
  app.use(MiddleWareAll);
  await app.listen(3000);
}
bootstrap();
