import { Course } from "../entities/Course";

export interface ICourseRepository {
    createCourseData(courseData: Course):Promise<any | null>;
}