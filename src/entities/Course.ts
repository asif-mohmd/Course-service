export interface Course {
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
    instructorId:string;
}

export interface CourseDetails {
    id: string;
    instructorId: string;
    courseName: string;
    courseDescription: string;
    coursePrice: string;
    estimatedPrice: string;
    courseTags: string;
    totalVideos: string;
    courseLevel: string;
    demoURL: string;
    benefits: string[];
    prerequisites: string[];
}

export interface IEditCourse {
    courseId: string;
    courseName: string;
    courseDescription: string;
    coursePrice: string;
    estimatedPrice: string;
    courseTags: string;
    totalVideos: string;
    courseLevel: string;
    demoURL: string;
    benefits: string[];
    prerequisites: string[];

}
