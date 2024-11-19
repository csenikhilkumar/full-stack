const  express = require('express')
function doctor (n){
    for (let i=0 ; i <=n;i++){
        console.log(i)
        // i++;
    }
}
app.get("/",function(req,res){
    const n =req.query.n;
    const ans =calculation (n)
    req.send(ans)
})
doctor(10)