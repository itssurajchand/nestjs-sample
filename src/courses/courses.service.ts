import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './schemas/course.schema';
@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(Course.name)
        private courseModel: Model<CourseDocument>) { }
    async getCourses() {
        let data = await this.courseModel.find();
        return {
            success: true,
            data: data
        }
    }
}
