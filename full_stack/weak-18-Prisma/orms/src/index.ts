import { PrismaClient } from "../src/generated/prisma";
import { POSTGRES_URI } from "./tsconfig";
import { Client } from "pg";
import express from "express";
const app = express()
app.use(express.json())


const client = new PrismaClient()
const connect_To_Db = new Client(POSTGRES_URI)



app.get("/signUp/:id",async function (req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const city = req.body.city;
        const id = req.params.id;
        console.log(id)
       const response=await client.user.findFirst({
        where:{
            id:parseInt(id)
        },  
    // data:{
    //     username:username,
    //     // email:email,
    //     // password:password,
    //     // age:age,
    //     // city:city
    // }
    select:{
        todos:true,
        username:true,
        email:true
    }
})

res.json({message:response})
})


async function main(){
    await connect_To_Db.connect()
    app.listen(3000,()=>{
        console.log("server running on port 3000")
    })
}

main()