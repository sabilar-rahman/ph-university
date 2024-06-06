import express, { Request, Response, NextFunction } from "express";
import { ProductsRoutes } from "./app/modules/product/product.route";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
import { UserRoutes } from "./app/modules/user/user.route";
import { error } from "console";
import globalErrorHandler from "./app/middlewares/globalErrorhandelers";
import notFound from "./app/middlewares/notfound";
import router from "./app/routes";
const app = express();

// Parser start---------
app.use(express.json());
app.use(cors());

// parser end----------

// application routes
app.use("/api/v1", router);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get("/", test);

app.use(globalErrorHandler);
app.use(notFound);
export default app;
