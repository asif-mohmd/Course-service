import mongoose, { Document, Schema, Model } from 'mongoose';


// Define the interface for Course document

// Define the subdocument interface
interface LessonVideo extends Document {
    videoTitle: string;
    videoURL: string;
    subtitleURL: string;
    videoDescription: string;
    links: string[];
}

// Define the subdocument schema
const lessonVideoSchema = new Schema<LessonVideo>({
    videoTitle: { type: String, required: true },
    videoURL: { type: String, required: true },
    subtitleURL: { type: String, required: true },
    videoDescription: { type: String, required: true },
    links: [{ type: String, required: true }]
});

// Define the lesson interface
// Define the lesson interface
interface Course extends Document {
    courseId: string;
    instructorId: string;
    thumbnail: string
    courseName: string;
    courseDescription: string;
    coursePrice: string;
    estimatedPrice: string;
    courseCategory: string;
    totalVideos: string;
    courseLevel: string;
    demoURL: string;
    benefits: string[];
    prerequisites: string[];
    lessons: LessonVideo[][];
}


const CourseSchema = new Schema<Course>({
   
    instructorId: { type: String, required: true },
    thumbnail: { type: String, required: true },
    courseName: { type: String, required: true },
    courseDescription: { type: String, required: true },
    coursePrice: { type: String, required: true },
    estimatedPrice: { type: String, required: true },
    courseCategory: { type: String, required: true },
    totalVideos: { type: String, required: true },
    courseLevel: { type: String, required: true },
    demoURL: { type: String, required: true },
    benefits: { type: [String], required: true },
    prerequisites: { type: [String], required: true },
    lessons: [[lessonVideoSchema]]
});


// Define the lesson model
const CourseModel: Model<Course> = mongoose.model('Course', CourseSchema);

export { CourseModel, Course, LessonVideo };
