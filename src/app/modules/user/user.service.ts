import config from "../../config";
import { academicSemester } from "../academicSemester/academic.semester.model";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentID } from "./user.utils";

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password

  userData.password = password || (config.default_password as string);
  // if(!password){
  //     user.password = config.default_password as string;
  // }else{
  //     user.password = password;
  // }

  //set student role
  userData.role = "student";



  //  find academic semester info

  const admissionSemester = await academicSemester.findById(payLoad.admissionSemester)




  //set  generated it

   //set  generated id
   userData.id = await generateStudentID(admissionSemester);

  // create a user

  const newUser = await User.create(userData);

  //   create a student

  if (Object.keys(newUser).length) {
    // set id , _id as user
    payLoad.id = newUser.id;
    payLoad.user = newUser._id; // reference id


    const newStudent = await Student.create(payLoad);
    return newStudent;


  }

  return newUser;
};

// const createStudentIntoDB = async (password: string, studentData: TStudent) => {
//     // create a user object
//     const userData: Partial<TUser> = {};

//     //if password is not given , use deafult password
//     userData.password = password || (config.default_password as string);

//     //set student role
//     userData.role = 'student';

//     //set manually generated it
//     userData.id = '2030100001';

//     // create a user
//     const newUser = await User.create(userData);

//     //create a student
//     if (Object.keys(newUser).length) {
//       // set id , _id as user
//       studentData.id = newUser.id;
//       studentData.user = newUser._id; //reference _id

//       const newStudent = await Student.create(studentData);
//       return newStudent;
//     }
//   };

export const UserServices = {
  createStudentIntoDB,
};
