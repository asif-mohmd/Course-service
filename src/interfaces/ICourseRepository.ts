import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";

export interface ICourseRepository {
    // createCourseData(courseData: Course):Promise<any | null>;
    listAllCourse(instructorId:string): Promise<any | null>;
    CourseDetails(courseId:string): Promise<CourseDetails>;
    createEditCourseData(instructorId:string,courseData:Course,lessonsContents:LessonsContents):Promise<boolean>
    deleteCourseDetails(courseId:string): Promise<CourseDetails | boolean>;
    GetAllUserCourses(): Promise<CourseDetails | boolean>;


}