import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';// en node



@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      })
  ],

})
export class AppModule {}
