import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";
import { ICourseRepository } from "../interfaces/ICourseRepository";
import { CourseModel } from "../model/schemas/course";


export class CourseRepository implements ICourseRepository {



   async deleteCourseDetails(courseId: string): Promise<boolean> {
    console.log(courseId)
    try {
        const response = await CourseModel.deleteOne({ _id:courseId })
        if (response.deletedCount && response.deletedCount > 0) {
            console.log("=============== Deleted successfully")
            return true
        } else {
            console.log("=============== No document matched the deletion criteria")
            return false
        }
    } catch (error) {
        console.error("Error deleting course:", error)
        return false
    }
}


    async createEditCourseData(instructorId:string,courseData:Course, lessonsContents: LessonsContents): Promise<boolean | any> {
        try {
            // Create the lesson document in the database
         let response
            if(!courseData._id){
                 response = await CourseModel.create({...courseData, courseLessons: lessonsContents, instructorId });
            }else{
                response = await CourseModel.updateOne({ _id: courseData._id }, { ...courseData, courseLessons: lessonsContents, instructorId }) }
        
            if(response){
                return true;
            }else{
                return false
            }
             // Return true if the document is saved successfully
        } catch (error) {
            console.error('Error saving lesson document:', error);
            return false; // Return false if there's an error
        }
    }


    async CourseDetails(courseId: string): Promise<CourseDetails | any> {
        try {
            console.log(courseId,"------------------")
            const courseDetials = await CourseModel.findOne({ _id: courseId })
            console.log(courseDetials, "repooo db Course details")
            if (courseDetials) {
                return courseDetials
            } else {
                return false
            }
        } catch (error) {

        }
    }

    async listAllCourse(instructorId: string): Promise<any> {

        const courseList = await CourseModel.find({ instructorId })
        if (courseList) {
            return courseList
        } else {
            return false
        }

    }



}
 