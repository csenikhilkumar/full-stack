const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
app.post("/sum",function(req,res){
    const a = req.body.a
    const b = req.body.b
    res.json({
        ans:a+b
    })
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})