const jwt =require("jsonwebtoken");
const { default: test } = require("node:test");
const zod =require("zod")
const secrate ="nikhil"
 
const emailschema=zod.string().email();
const passwordSchema=zod.string().min(6);

function signjwt(username,password){
    const usrnameResponse =emailschema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usrnameResponse.success||passwordResponse.success){
        return null;
    }
    else{
        console.log("eligible")
    }
    const signature = jwt.sign({
        username,password
    },secrate)
return signature;
}



function decode(token){
    const decod =jwt.decode(token)
    if(decod){
        return true
    }
    else{
        return false
    }
}
function verifyInformation(token
){
    let ans =true;
   try{ const verify =jwt.verify(token,secrate)
    
    return ans
    
}
    catch(e){

     return ans =false
    }
    return ans
    }



const d =decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pa2hpbGt1bWFyIiwicGFzc3dvcmQiOjI3MjcyNywiaWF0IjoxNzMzNjU3NDU4fQ.L4rwWbGjHCoUcLn_fBpYV-BFYHskmNLGtjGbW4utyOE")
console.log(d)
console.log(signjwt("nikhil@gmail.com","4888"))
const verify=verifyInformation("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pa2hpbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjQ4ODgiLCJpYXQiOjE3MzM2NjMwMjV9.6wjudwfIE8phGEsYWboPfcmSuZ8BJwyg5ZQ8lfQkscQ")
console.log(verify)
test(verify)