import mongoose, { Document, Schema, Model } from 'mongoose';

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
interface Lesson extends Document {
    courseId: string;
    jaggedArrayOfArrays: LessonVideo[][];
}

const lessonSchema = new Schema<Lesson>({
    courseId: { type: String, required: true },
    jaggedArrayOfArrays: [[lessonVideoSchema]]
});


// Define the lesson model
const LessonModel: Model<Lesson> = mongoose.model('Lesson', lessonSchema);

export { LessonModel, Lesson, LessonVideo };
