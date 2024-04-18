import { Course } from "../entities/Course";

export interface ICourseInteractor {
    createCourse(courseData: Course):Promise<any | null>;
}