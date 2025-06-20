import env from "dotenv"
env.config()
import { NextRequest, NextResponse } from "next/server";
import {Client} from "pg"
import bcrypt from "bcrypt"
// import { PrismaClient } from "@/app/generated/prisma"; 
import prisma from "@/app/lib/bd";
import jwt from "jsonwebtoken"



// const prisma = new PrismaClient()

const connect_db =  new Client(process.env.DATABASE_URL)
const jwtSecrate:any = process.env.JWT_SECRATE
 async function main(){
    const connect_to_db = await connect_db.connect()
 }
 main()




export async function POST(req:NextRequest,res:NextResponse){
    try{

        const body = await req.json()
        console.log(body)
    const {username,email,password} = body
    const hashedPassword = await bcrypt.hash(password,10)
    const findUser = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if(!findUser){
        const userCreate = await prisma.user.create({
            data:{username:username,
            email:email,
            password:hashedPassword,
            }
        })
        const id = userCreate.id
        if(userCreate){
            const token = jwt.sign({id},jwtSecrate,{expiresIn:"7d"})
            return NextResponse.json({token},{status:200})
        }
    }
    else{
        return NextResponse.json({message:"user allready exists "})
    }
}catch(error){
    console.log(error)
    return NextResponse.json({message:"internel server error"})
        
    
    
}

}