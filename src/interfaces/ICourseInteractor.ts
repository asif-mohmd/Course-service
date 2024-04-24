import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";

export interface ICourseInteractor {
    createCourse(courseData: Course): Promise<any | null>;
    listCourse({ instructorId }: { instructorId: string }): Promise<any | boolean>;
    getCourseDetails({courseId}:{courseId:string}): Promise<CourseDetails | boolean>;
    editCourseDetails(editCourseData:IEditCourse): Promise< boolean>;
    addLessonsContents(courseId:string,lessonsContents:LessonsContents):Promise<boolean>
}
