import mongoose, { Document, Model, Schema } from "mongoose";



// Define the interface for Course document
export interface ICourse extends Document {
    courseName: string;
    courseDescription: string;
    coursePrice: string;
    estimatedPrice: string;
    courseTags: string;
    totalVideos: string;
    courseLevel: string;
    demoURL: string;
    benefits: Array<string>;
    prerequisites: Array<string>;
}

// Define the schema for Course
const courseSchema: Schema<ICourse> = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseDescription: { type: String, required: true },
    coursePrice: { type: String, required: true },
    estimatedPrice: { type: String, required: true },
    courseTags: { type: String, required: true },
    totalVideos: { type: String, required: true },
    courseLevel: { type: String, required: true },
    demoURL: { type: String, required: true },
    benefits: { type: [String], required: true },
    prerequisites: { type: [String], required: true }
});

// Create a model using the schema
const CourseModel: Model<ICourse> = mongoose.model<ICourse>("Course", courseSchema);

export default CourseModel;
