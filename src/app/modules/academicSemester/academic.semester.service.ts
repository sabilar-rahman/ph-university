import { AcademicSemesterNameCodeMapper } from "./academic.semester.constants";
import { academicSemester } from "./academic.semester.model";
import {
  TAcademicSemester,
  TAcademicSemesterCode,
} from "./academicSemester.interface";

const CreateAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {


  // semester code  = semester code



  if (AcademicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error("Invalid Semester code");
  }
  

  const result = await academicSemester.create(payLoad);

  return result;
};


const getAllAcademicSemestersFromDB = async () => {
    const result = await academicSemester.find();
    return result;
  };
  
  const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await academicSemester.findById(id);
    return result;
  };
  
  const updateAcademicSemesterIntoDB = async (
    id: string,
    payload: Partial<TAcademicSemester>,
  ) => {
    if (
      payload.name &&
      payload.code &&
      AcademicSemesterNameCodeMapper[payload.name] !== payload.code
    ) {
      throw new Error('Invalid Semester Code');
    }
  
    const result = await academicSemester.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };
  







export const AcademicSemesterServices = {
  CreateAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
