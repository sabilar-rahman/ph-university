import { TAcademicSemester } from "../academicSemester/academicSemester.interface";

export const generateStudentID = (payLoad: TAcademicSemester) => {
  // first time 0000

  const currentID = (0).toString();
  let incrementID = (Number(currentID)+1).toString().padStart(4, "0");


  incrementID = `${payLoad.year}${payLoad.code}${incrementID}`;


  return incrementID;
};
