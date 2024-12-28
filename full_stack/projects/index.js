const express = require("express")
const mongoose =require("mongoose")
const {UserRouter}=require("./routes/users")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")
const {usersModel,courseModel,adminModel,purchagesModel}=require("./database/db")

const app =express();
app.use("/api/v1/users",UserRouter)
app.use("/api/v1/admin",adminRouter)
app.use("/api/v1/course",courseRouter)
 async function Main(){
    await mongoose.connect("mongodb+srv://admin:7fegnJGsBAVLeCoh@cluster0.t9tqw.mongodb.net/coursera-app")

    app.listen(3000,function(){
    console.log("your server is runnig on port 3000")
})
 }
Main()
