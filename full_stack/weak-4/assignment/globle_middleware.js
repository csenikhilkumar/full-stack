const express = require("express")
const app = express();
const port = 3000
let request= 0
app.use(function globleMiddelware(req,res,next){
    // const age = req.query.age
    request = request+1
    next()
    // if (age>= 14){
    //     next();
    // }
    // else{
    //     res.send("you are not eligible")
    // }
})

app.get("/ride1",function(req,res){
    res.json({msg:"your ride is booked",
        requ:request
    })
})
app.get("/ride1",function(req,res){
    res.json({msg:"your ride is booked",
        requ:request
    })
})
// app.get("/request",function(req,res){
//     res.json({re:request})
// })

function onThisPort(){
    console.log("server is running on this port 3000")
}
app.listen(port,onThisPort)