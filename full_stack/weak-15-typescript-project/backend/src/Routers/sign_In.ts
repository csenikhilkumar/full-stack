import dotenv, { config } from "dotenv"
dotenv.config();
import express from "express"
import zod from "zod"
import bcrypt from "bcrypt"
import { Router } from "express"
import { user } from "../db/db"
import jwt from "jsonwebtoken"
import { error } from "node:console";
const SignInRouter = express.Router()
const secretKey:any = process.env.JWT_SECRET



 SignInRouter.post("/signIn",async function (req:any,res:any){
    try {
        const {email,password}= req.body
        const verifyallfields = zod.object({
            email:zod.string().min(4).max(100).email(),
            password:zod.string().min(4).max(100)
        })
        const verify =await verifyallfields.safeParse(req.body)
        if(!verify.success){
            return res.status(404).json({error:"invalid cridentials"})
        }
        const findUser:any = await user.findOne({email:email})
        if(!findUser){
          res.json({message:"user doesnt exist please write right cridentials "})
        }
        const passwordComapre = await bcrypt.compare(password,findUser.password)
        if(passwordComapre){
            const token = await jwt.sign({id:findUser._id},secretKey)
            return res.status(400).json({message:"user succesfully logged in ",
                                        token:token
            })
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({message:"internal server error"})
    }

})

export default SignInRouter