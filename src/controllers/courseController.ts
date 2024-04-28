import { ICourseInteractor } from "../interfaces/ICourseInteractor";

export class CourseController {
  private interactor: ICourseInteractor;

  constructor(interactor: ICourseInteractor) {
    this.interactor = interactor;
  }


  onListCourse: any = async (call: any, callback: any) => {
    try {
      const request = call.request
      const response = await this.interactor.listCourse(request)
      if (response) {
        callback(null, {
          courses: response,
          courseStatus: true
        })
      } else {
        callback(null, {
          courseStatus: false
        })
      }
    } catch (err) {
      callback(err)
    }
  }


  onCreateOrEditCourse = async (data: any) => {
    try {
      const courseData = data.courseDetails
      const instructorId = data.instructorId
      const lessonContents = data.lessonContents
      return await this.interactor.createEditCourse(instructorId, courseData, lessonContents)
    } catch (err) {

    }
  }

  GetCourseDetails = async (courseId: any) => {
    try {
      const response = await this.interactor.getCourseDetails(courseId)
      return response
    } catch (err) {

    }
  }

  onDeleteCourseDetails = async (courseId: any) =>{
    try {
      console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
      return await this.interactor.deleteCourseDetails(courseId)
    } catch (err) {

    }
  }



  onGetCourseDetails: any = async (call: any, callback: any) => {
    try {
      const request = call.request
      const response = await this.interactor.getCourseDetails(request)
      console.log(response, "controlllll get course")
      if (response) {
        callback(null, {
          courseDetails: response,
          courseStatus: true
        })
      } else {
        callback(null, {
          courseStatus: false
        })
      }
    } catch (err) {
      callback(err)
    }
  }


}
