const express = require ("express")
const app = express();
app.get("/",function(req,res){
    const a=req.query.a
    const b= req.query.b
res.status(300).json({"ans":a+b})
})

app.get("/",function(req,res){
    const a=req.query.a
    const b= req.query.b
res.json({"ans":a-b})
})
app.get("/",function(req,res){
    const a=req.query.a
    const b= req.query.b
res.json({"ans":a*b})
})
app.get("/",function(req,res){
    const a=req.query.a
    const b= req.query.b
res.json({"ans":a/b})
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})