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



  onEditCourseDetails: any = async (call: any, callback: any) => {
    try {

      const request = call.request
      const response = await this.interactor.editCourseDetails(request)
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

  onCreateCourse = async (data:any)=>{
    try{
      // console.log(data.lessonContents,"herererer")
      const courseData = data.courseDetails
      const instructorId = data.instructorId
      const lessonContents = data.lessonContents

      console.log(courseData,"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
      return await this.interactor.createCourse(instructorId,courseData,lessonContents)
     
    }catch(err){

    }
  }

  GetCourseDetails = async (courseId:any)=>{
    try{

      const response =  await this.interactor.getCourseDetails(courseId)
     return response
    }catch(err){

    }
  }



  onGetCourseDetails: any = async (call: any, callback: any) => {
    try {

      const request = call.request
      const response = await this.interactor.getCourseDetails(request)
      console.log(response,"controlllll get course")
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


  // onGetLessonsContents = async(data:any)=>{
  //   try {
  //     const instructorId = data.instructorId
  //     return await this.interactor.getLessonsContents(instructorId)
  //   } catch (error) {
      
  //   }
  // }

}
