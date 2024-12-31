const express = require("express")
const jwt = require("jsonwebtoken")
const{jwt_secrate}=require("../config")
const { userAuthmiddle } = require("./user_auth")

async function adminAuthmiddle(req,res,next){
    try{
    const token = req.headers.authorization
    const verifytoken = jwt.verify(token,jwt_secrate)
    if(verifytoken){
        req.userId=res.id
        next()
    }
}
    catch(e){
        res.json({
            "msg":"Unauthorized access"
        })
    } 

}


module.exports={
    adminAuthmiddle:adminAuthmiddle
}