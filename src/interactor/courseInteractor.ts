import { ICourseRepository } from "../interfaces/ICourseRepository";
import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";
import { ICourseInteractor } from "../interfaces/ICourseInteractor";

export class CourseInteractor implements ICourseInteractor {
  private repository: ICourseRepository;

  constructor(repository: ICourseRepository) {
    this.repository = repository;
  }
  async createCourse( instructorId:string,courseData:Course,lessonsContents: LessonsContents): Promise<boolean | any> {
    // console.log(courseId, ";;;;;;", lessonsContents)
    try {
 
      return await this.repository.createCourseData(instructorId,courseData, lessonsContents);

    } catch { }

  }


  async editCourseDetails(editCourseData: IEditCourse): Promise<boolean | any> {
    try {
      console.log(editCourseData, "iam interactor");
      const response = await this.repository.editCourse(editCourseData);

      if (response) {
        return true
      } else {
        return false
      }
    } catch { }

  }
  async getCourseDetails(courseId:string): Promise<CourseDetails | any> {
    try {
      console.log("course detisl interactior",courseId)
      const response = await this.repository.CourseDetails(courseId);
      if (response) {
        return response
      } else {
        return false
      }
    } catch (error) {

    }
  }

  async listCourse({ instructorId }: { instructorId: string }): Promise<any> {
    try {
      console.log("I am inside listCourse method of CourseInteractor");
      const response = await this.repository.listAllCourse(instructorId);
      if (response) {
        return response
      } else {
        return false
      }
    } catch (error) {
      // Handle errors appropriately, either by logging or throwing them
      console.error("Error in listCourse method:", error);
      throw error; // Rethrow the error for the caller to handle it
    }
  }

  // async createCourse(courseData: Course) {
  //   try {
  //     console.log(courseData, "iam interactor");
  //     const response = await this.repository.createCourseData(courseData);

  //     if (response) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } catch { }
  // }
}
