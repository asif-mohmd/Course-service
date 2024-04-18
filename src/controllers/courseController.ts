import { ICourseInteractor } from "../interfaces/ICourseInteractor";

export class CourseController {
  private interactor: ICourseInteractor;

  constructor(interactor: ICourseInteractor) {
    this.interactor = interactor;
  }
  onCreateCourse: any = async (call: any, callback: any) => {
    try {
      const request = call.request
      console.log(request,"0000000000000000000000")
      const response = await this.interactor.createCourse(request);
      if (response.registerStatus) {
        callback(null, {
          msg: "OTP send",
          registerStatus: true,
          instructorData: response.activationToken,
        });
      } else {
        callback(null, {
          msg: "User Already exists",
          registerStatus: false,
        });
      }
    } catch (error) {
      callback(error);
    }
  };

}
