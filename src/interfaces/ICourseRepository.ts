import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";

export interface ICourseRepository {
    // createCourseData(courseData: Course):Promise<any | null>;
    listAllCourse(instructorId:string): Promise<any | null>;
    CourseDetails(courseId:string): Promise<CourseDetails>;
    editCourse(editCourseData:IEditCourse): Promise< boolean>;
    createCourseData(instructorId:string,courseData:Course,lessonsContents:LessonsContents):Promise<boolean>

}