const {Router} = require('express');
const z =require("zod")
const {admin}=require("../database/db")
const bcrypt =require("bcrypt")
const adminrouter = Router();


adminrouter.post("/signup",async function(req,res){
const requirebody = z.object({
    email:z.string().min(2).max(20).email(),
    password:z.string()
})
const safeparsewithsuccess = await requirebody.safeParse(req.body)
 if (!safeparsewithsuccess){
res.json({
    "massage":"you are using wrong cridentials please write right cred.."
})
}
const email = req.body.email;
const password =req.body.password
const hashedPassword = await bcrypt.hash(password,17)
const user = await admin.create({
    email:email,
    password:hashedPassword
})
res.json({
    "msg":"you are succesfully signed_up"
})
})

module.exports={
    adminrouter:adminrouter
}