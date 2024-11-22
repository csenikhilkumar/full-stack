const express = require("express")
const app = express();
const body_parser=require("body-parser")
let request =0
function middleware(req,res,next){
   console.log("type of method is",req.method)
   console.log("hostname is ", req.hostname)
   console.log("what is date of today",new Date())
   console.log("what is the rout request comes there",req.url)
   next()
}
//express.json is in built middleware that is convert json data  
app.use(middleware,express.json())
// app.use(body_parser.json())
app.get("/",function(req,res){

    const  a  = req.body.a
    const b = req.body.b
    res.json({
        ans:a-b
    })
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})