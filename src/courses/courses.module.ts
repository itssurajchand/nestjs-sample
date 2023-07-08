import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course, CourseSchema } from './schemas/course.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema }])]
})
export class CoursesModule { }
