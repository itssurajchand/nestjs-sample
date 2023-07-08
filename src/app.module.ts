import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ENV } from '../config/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './courses/courses.module';
@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: ENV.DB_URL,
    }),
  }), ConfigModule.forRoot({
    envFilePath: ENV.ENV_PATH,
  }), CoursesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
