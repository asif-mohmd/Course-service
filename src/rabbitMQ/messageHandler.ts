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

    const {num1,num2} = data

    console.log("The operation is ",operation)

    switch (operation){
        case "add-lesson-content":
            response = await controller.onAddLessonsContent.bind(controller)(data);
            break;

            case "sum":
            response = num1+ num2;
            break;

            default:
                response = 0;
                break
    }

    await rabbitClient.produce(response,correlationId,reply)

}
}
