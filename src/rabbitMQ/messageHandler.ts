import { CourseController } from "../controllers/courseController"
import { CourseInteractor } from "../interactor/courseInteractor"
import { CourseRepository } from "../repository/courseRepository"
import rabbitClient from "./client"




const repository = new CourseRepository()
const interactor = new CourseInteractor(repository)
const controller = new CourseController(interactor)

export default class MessageHandler {
  static async handle(
    operation: string,
    data: any,
    correlationId: string,
    reply: string
  ){
    let response = data

    console.log("The operation is ",operation)

    switch (operation){
        case "create-course":
            response = await controller.onCreateCourse.bind(controller)(data);
            break;

        case "get-course-details":
            response = await controller.GetCourseDetails.bind(controller)(data);
            break;

            // case "get-lessons-contents":
            //     response = await controller.onGetLessonsContents.bind(controller)(data);
            //     break;

            default:
                response = 0;
                break
    }

    await rabbitClient.produce(response,correlationId,reply)

}
}
