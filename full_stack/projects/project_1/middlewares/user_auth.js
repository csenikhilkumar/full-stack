const express = require("express")
const {users_jwt_secrate}=require("../project_1/config")
const jwt = require("jsonwebtoken")



async function userAuthmiddle(req,res,next){
    const token = req.headers.authorization
    const verifytoken = jwt.verify(token,users_jwt_secrate)
    if(verifytoken){
        req.userId=res.id
        next()
    }
    else{
        res.json({
            "msg":"Unauthorized access"
        })
    }
}


module.exports={
    userAuthmiddle:userAuthmiddle
}
