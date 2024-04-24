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


export interface IContent {
    videoTitle: string;
    videoURL: string;
    subtitleURL: string;
    videoDescription: string;
    links: any[]; // Adjust the type according to the actual structure of links
}

export interface LessonsContents {
    videos: IContent[];
}
