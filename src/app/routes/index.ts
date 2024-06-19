import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import path from "path";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academic.semester.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    router: UserRoutes,
  },
  {
    path: "/students",
    router: StudentRoutes,
  },
  {
    path:"/academic-semesters",
    router: AcademicSemesterRoutes,
  }
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
export default router;
