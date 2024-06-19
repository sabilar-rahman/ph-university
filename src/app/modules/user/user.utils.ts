import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

// const findLastStudentID = async () => {
//     const lastStudent = await User.findOne({
//         role: 'student'
//     }, {
//         id: 1,
//         _id: 0,
//     }).sort({
//         createdAt: -1
//     })
//         .lean();


//     return lastStudent?.id ? lastStudent.id.substring(6) : undefined

// }


const findLastStudentID = async () => {
    const lastStudent = await User.findOne(
      {
        role: 'student',
      },
      {
        id: 1,
        _id: 0,
      },
    )
      .sort({
        createdAt: -1,
      })
      .lean();
  
    //203001   0001
    return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
  };





export const generateStudentID = async (payLoad: TAcademicSemester) => {
    // first time 0000

    const currentID = (await findLastStudentID() )|| (0).toString();
    let incrementID = (Number(currentID) + 1).toString().padStart(4, "0");


    incrementID = `${payLoad.year}${payLoad.code}${incrementID}`;


    return incrementID;
};
