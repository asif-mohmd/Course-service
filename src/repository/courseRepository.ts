import { Course, CourseDetails, IEditCourse, LessonsContents } from "../entities/Course";
import { ICourseRepository } from "../interfaces/ICourseRepository";
import CourseModel, { ICourse } from "../model/schemas/course";
import { LessonModel } from "../model/schemas/lesson";


export class CourseRepository implements ICourseRepository {

    async lessonsContents(courseId: string, lessonsContents: LessonsContents): Promise<boolean | any> {
        try {
            console.log(lessonsContents, "----------------");
            // Create the lesson document in the database
            const createdLesson = await LessonModel.create({courseId, jaggedArrayOfArrays: lessonsContents });
    
            console.log('Lesson document saved successfully:', createdLesson);
            return true; // Return true if the document is saved successfully
        } catch (error) {
            console.error('Error saving lesson document:', error);
            return false; // Return false if there's an error
        }
    }
    
    
    
 
    async editCourse(editCourseData: IEditCourse): Promise<boolean | any> {
        try {
            console.log("editCourseData:", editCourseData);

            // Assuming CourseModel is your Mongoose model for courses
            const courseDetails = await CourseModel.updateOne(
                { _id: editCourseData.courseId }, // filter based on courseId
                {
                    $set: { // use $set to update specific fields
                        courseName: editCourseData.courseName,
                        courseDescription: editCourseData.courseDescription,
                        coursePrice: editCourseData.coursePrice,
                        estimatedPrice: editCourseData.estimatedPrice,
                        courseTags: editCourseData.courseTags,
                        totalVideos: editCourseData.totalVideos,
                        courseLevel: editCourseData.courseLevel,
                        demoURL: editCourseData.demoURL,
                        benefits: editCourseData.benefits,
                        prerequisites: editCourseData.prerequisites
                    }
                }
            );
            console.log("Updated course details:", courseDetails);
            // Check if the update operation was successful
            if (courseDetails.modifiedCount && courseDetails.modifiedCount > 0) {
                return true; // Successfully updated
            } else {
                return false; // No documents matched the filter or no modifications were made
            }
        } catch (error) {
            console.error("Error updating course:", error);
            throw error; // Throw error for handling in the calling function
        }
    }

    async CourseDetails(courseId: string): Promise<CourseDetails | any> {
        try {
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
        console.log(courseList, "iam course lsitttttttt")
        if (courseList) {
            return courseList
        } else {
            return false
        }

    }

    async createCourseData(courseData: Course): Promise<any | null> {
        const isCourseCreated = await CourseModel.create(courseData)
        console.log("Crated:", isCourseCreated, "-------")
        if (isCourseCreated) {
            return true
        } else {
            return false
        }
    }


}