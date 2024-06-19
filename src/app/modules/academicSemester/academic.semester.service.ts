import { academicSemester } from "./academic.semester.model";
import { TAcademicSemesterCode } from "./academicSemester.interface";

const CreateAcademicSemesterIntoDB = async (payLoad: TAcademicSemesterCode) => {

    const result = await academicSemester.create(payLoad);

    return result ;

}


export const AcademicSemesterServices = {
    CreateAcademicSemesterIntoDB,

}