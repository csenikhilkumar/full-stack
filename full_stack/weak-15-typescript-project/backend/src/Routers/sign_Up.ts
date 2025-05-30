import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
const signUpRouter = express.Router();
import { user } from "../db/db"; 
import zod from "zod";
const app = express()
import cors from "cors"

app.use(cors())
const verifyAllFields = zod.object({
      email: zod
        .string()
        .min(4)
        .max(100)
        .email({ message: "enter correct syntax" }),
      name: zod.string().min(2).max(100),
      password: zod.string().min(4).max(100),
    });

signUpRouter.post("/signUp", async function (req: any, res: any) {
  try {
   

    const safeParse =verifyAllFields.safeParse(req.body);
    if (!safeParse.success) {
      console.log(safeParse.error);

      return res.status(404).json({ message: "invalid cridentials " });
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 3);

    const findUser = await user.findOne({
      email: email,
    });
    if (findUser) {
      return res.json({ massege: "user allready exist" });
    }

    const user1 = await user.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    if (user1) {
      return res.json({
        message: "user successfully signedUp",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error "
    });
  }
});

export default signUpRouter;
