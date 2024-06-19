import { Schema, model } from "mongoose";

import {
  TAcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from "./academicSemester.interface";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academic.semester.constants";

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  }
);

// pre hook middleware for preventing same semester to sava database

AcademicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await academicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error("Semester is Already Exists");
  }
  next();
});

export const academicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  AcademicSemesterSchema
);
