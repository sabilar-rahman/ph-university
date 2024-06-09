import { Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.service";
import { error } from "console";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

    // res.status(200).json({
    //   success: true,
    //   message:'Student is created successfully',
    //   data: result,
    // })

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went",
      error: err,
    });
  }
};

export const UserControllers = {
  createStudent,
};
