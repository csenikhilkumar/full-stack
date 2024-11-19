const express = require("express")
const app = express();
const cors =require("cors")
app.use(cors())

app.get("/",function (req,res){
    res.json([{
     "msg":"sucessfully run ",
     "id":"155",
        body:"hello i am nikhil"
    },{
        "msg":"sucessfully run ",
        "id":"155",
           body:"hello i am nikhil"
       },{
        "msg":"sucessfully run ",
        "id":"155",
           body:"hello i am nikhil"
       },{
        "msg":"sucessfully run ",
        "id":"155",
           body:"hello i am nikhil"
       },{
        "msg":"sucessfully run ",
        "id":"155",
           body:"hello i am nikhil"
       }])
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})