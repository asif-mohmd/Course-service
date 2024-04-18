import { ICourseRepository } from "../interfaces/IInstructorRepository";
import { Course } from "../entities/Course";
import { ICourse } from "../model/schemas/instructor.schema";
import { ICourseInteractor } from "../interfaces/ICourseInteractor";


export class CourseInteractor implements ICourseInteractor {
  private repository: ICourseRepository;

  constructor(repository: ICourseRepository) {
    this.repository = repository;
  }


}
