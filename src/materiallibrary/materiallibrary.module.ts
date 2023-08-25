import { Module } from '@nestjs/common';
import { MateriallibraryService } from './materiallibrary.service';
import { MateriallibraryController } from './materiallibrary.controller';
import { MulterModule } from '@nestjs/platform-express';
import {diskStorage} from 'multer'
import {extname,join} from 'path'
@Module({
  imports:[
    MulterModule.register({
      storage:diskStorage({
        destination:join(__dirname,'../../src/images'),//join(__dirname,'../images')  '../../src/images' './src/images' 用绝对路径会放到dist文件夹，重新运行会被删除
        filename:(_,file,callback)=>{
          const filename = `${new Date().getTime()+extname(file.originalname)}`
          return callback(null,filename)
        }
      })
    })],
  controllers: [MateriallibraryController],
  providers: [MateriallibraryService]
})
export class MateriallibraryModule {}
