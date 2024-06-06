import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
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

  //set manually generated it
  userData.id = "2030100001";

  // create a user

  const newUser = await User.create(userData);

  //   create a student

  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference id


    const newStudent = await Student.create(studentData);
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
