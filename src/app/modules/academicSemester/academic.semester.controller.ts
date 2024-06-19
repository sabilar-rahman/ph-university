import { Request, RequestHandler, Response } from "express";

import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { AcademicSemesterServices } from "./academic.semester.service";

const CreateAcademicSemester = catchAsync(async (req, res) => {
 

  const result = await AcademicSemesterServices.CreateAcademicSemesterIntoDB(req.body);

  // res.status(200).json({
  //   success: true,
  //   message:'Student is created successfully',
  //   data: result,
  // })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  CreateAcademicSemester,
};
