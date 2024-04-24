import { ICourseInteractor } from "../interfaces/ICourseInteractor";

export class CourseController {
  private interactor: ICourseInteractor;

  constructor(interactor: ICourseInteractor) {
    this.interactor = interactor;
  }
  onCreateCourse: any = async (call: any, callback: any) => {

    try {
      const request = call.request
      console.log(call.request, "0000000000000000000000")
      const response = await this.interactor.createCourse(request);
      if (response) {
        callback(null, {
          courseStatus: true
        });
      } else {
        callback(null, {
          courseStatus: false,
        });
      }
    } catch (error) {
      callback(error);
    }
  };

  onListCourse: any = async (call: any, callback: any) => {
    try {

      const request = call.request
      console.log(call.request, "0000000000000000000000")
      const response = await this.interactor.listCourse(request)
      console.log(response, "==----===----=----")
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

  onGetCourseDetails: any = async (call: any, callback: any) => {
    try {

      const request = call.request
      console.log(call.request, "0000000000000000000000")
      const response = await this.interactor.getCourseDetails(request)
      console.log("contro",response, "==----===----=----")
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

  onEditCourseDetails: any = async (call: any, callback: any) => {
    try {

      const request = call.request
      console.log(call.request, "0000000000000000000000")
      const response = await this.interactor.editCourseDetails(request)
      console.log("contro",response, "==----===----=----")
      if (response) {
        callback(null, {
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

  onAddLessonsContent = async (data:any)=>{
    try{
      // console.log(data.lessonContents,"herererer")
      const courseId = data.courseId
      const lessonContents = data.lessonContents
      const response = await this.interactor.addLessonsContents(courseId,lessonContents)
    return true
    }catch(err){

    }
  }

}
