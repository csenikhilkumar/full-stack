const express = require("express")
const app = express();
function calculatesum(n){
    let ans = 0
    for(let i = 0;i<=n;i++){
        ans=ans+i
    }
    return ans
}

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });
  
app.get("/",function(req,res){
    const n = req.query.n
    const ans = calculatesum(n)
    res.send(ans.toString())
})

app.get("/nikhil",function(req,res){
    res.json({msg:"hello  i am nikhil "})
})
app.listen(3000)