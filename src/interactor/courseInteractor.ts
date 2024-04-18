import { ICourseRepository } from "../interfaces/ICourseRepository";
import { Course } from "../entities/Course";
import { ICourse } from "../model/schemas/course";
import { ICourseInteractor } from "../interfaces/ICourseInteractor";


export class CourseInteractor implements ICourseInteractor {
    private repository: ICourseRepository;

    constructor(repository: ICourseRepository) {
        this.repository = repository;
    }
    async createCourse(courseData: Course) {
        try {


        } catch {

        }
    }
}