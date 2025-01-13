require("dotenv").config();;
const express =require("express");
const {adminrouter}=require("./router/admin")
const{userrouter}=require("./router/user")
const { default: mongoose } = require("mongoose");
const app =express();
app.use(express.json())
app.use("/api/v1/User",userrouter);
app.use("/api/v1/Admin",adminrouter);
async function start(){
    await mongoose.connect(process.env.MONGOOSE_URL)
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    });
}
start();