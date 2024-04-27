import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";

export interface ICourseInteractor {
    // createCourse(courseData: Course): Promise<any | null>;
    listCourse({ instructorId }: { instructorId: string }): Promise<any | boolean>;
    getCourseDetails(courseId:string): Promise<CourseDetails | boolean>;
    editCourseDetails(editCourseData:IEditCourse): Promise< boolean>;
    createCourse(instructorId:string,courseData: Course,lessonsContents:LessonsContents):Promise<boolean>
}
