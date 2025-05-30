import dotenv from "dotenv";
dotenv.config();
import express from "express"
const app = express();
// const mongoose = require("mongoose")
import signUpRouter from "./Routers/sign_Up"
import SignInRouter from "./Routers/sign_In"
import UserDataRouter from "./Routers/userData";
import mongoose from "mongoose";
const mongoUri : any = process.env.MONGO_URI;
import cors from "cors"


app.use(cors())
app.use(express.json())
app.use("/user/v1/",signUpRouter)
app.use("/user/v1/",SignInRouter)
app.use("/user/v1/",UserDataRouter)

 

async function Connect(){
    await mongoose.connect(mongoUri)
    console.log("mongo connected")
    app.listen(3001,function(){
    console.log("server running on port 3000")
   })
   }

   Connect()

