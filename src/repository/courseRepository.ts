import { Course } from "../entities/Course";
import { ICourseRepository } from "../interfaces/ICourseRepository";


export class CourseRepository implements ICourseRepository{

    async createCourseData(courseData: Course): Promise<any> {
        
    }
  

}