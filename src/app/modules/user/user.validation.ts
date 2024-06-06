import { z } from "zod";

const userValidationSchema = z.object({
//   id: z.string(),instead of this we will use auto generated id

  password: z.string({
    invalid_type_error:"password must be string"
  }).max(20, { message: "password note more than 20" }).optional(),

//   needPasswordChange: z.boolean().optional().default(true),

  role: z.enum(["students", "faculty", "admin"]),

  status: z.enum(["in-progress", "blocked"]).default("in-progress"),

  isDeleted: z.boolean().optional().default(false),
});


export const UserValidation ={
    userValidationSchema,

} 
