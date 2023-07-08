import mongoose from 'mongoose';
import { Document } from 'mongoose';
export type CourseDocument = Course & Document;
export declare class Course extends Document {
    Name: string;
}
export declare const CourseSchema: mongoose.Schema<Course, mongoose.Model<Course, any, any, any, mongoose.Document<unknown, any, Course> & Omit<Course & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Course, mongoose.Document<unknown, {}, mongoose.FlatRecord<Course>> & Omit<mongoose.FlatRecord<Course> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
