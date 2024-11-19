const express = require("express")
const app = express();

let numberofrequestforuser={}
    setInterval(()=>{
        numberofrequestforuser={}
    },1000)

app.use(function(req,res,next){
    const userid=req.header["user-id"]
  if(  numberofrequestforuser[userid]){
    numberofrequestforuser[userid]=numberofrequestforuser+1;
  
    if(numberofrequestforuser>5){
    res.status(404).send("not enter")

    }
     else{
     next()
 }
}
  else{
    numberofrequestforuser[userid]= 1
    next()
  }

})
app.listen(3000)