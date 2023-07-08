import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
export type CourseDocument = Course & Document
@Schema()
export class Course extends Document {
    @Prop()
    Name: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);