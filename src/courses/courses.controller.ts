import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';


@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) { }
    @Get()
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    }
}
