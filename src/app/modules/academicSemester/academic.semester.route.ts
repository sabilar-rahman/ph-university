import express from "express";
import { AcademicSemesterControllers } from "./academic.semester.controller";
import ValidateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidation } from "./academic.Semester.validation";

const router = express.Router();

router.post('/create-academic-semester',ValidateRequest(AcademicSemesterValidation.CreateAcademicSemesterValidationSchema),
    AcademicSemesterControllers.CreateAcademicSemester,
);

router.get(
    '/:semesterId',
    AcademicSemesterControllers.getSingleAcademicSemester,
  );
  
  router.patch(
    '/:semesterId',
    ValidateRequest(
      AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.updateAcademicSemester,
  );





export const AcademicSemesterRoutes = router;
