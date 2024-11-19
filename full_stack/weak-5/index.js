const express = require("express")
const app = express();
const cors =require("cors")
app.use(cors())

app.get("/",function (req,res){
    res.json({
     "msg":"sucessfully run ",
     "id":"155",
        body:"hello i am nikhil"
    })
})
// app.get('/', (req, res) => {
    // app.get('/', (req, res) => {
    //     console.log("Received request");
    //     const data = { body: "Hello from server!" };
    //     console.log("Sending response:", data);
    //     res.json(data);
    // });
    



app.listen(3000,function(){
    console.log("server is runnig on port 3000")
})