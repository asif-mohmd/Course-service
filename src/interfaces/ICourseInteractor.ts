import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";

export interface ICourseInteractor {
    // createCourse(courseData: Course): Promise<any | null>;
    listCourse({ instructorId }: { instructorId: string }): Promise<any | boolean>;
    getCourseDetails(courseId:string): Promise<CourseDetails | boolean>;
    createEditCourse(instructorId:string,courseData: Course,lessonsContents:LessonsContents):Promise<boolean>
    deleteCourseDetails(courseId:string): Promise<CourseDetails | boolean>;
}
