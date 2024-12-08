const jwt =require("jsonwebtoken")
const value ={
    username : "nikhilkumar",
    password : 272727

}
const secrate="nikhil"
const generatetoken =jwt.sign(value,secrate)
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pa2hpbGt1bWFyIiwicGFzc3dvcmQiOjI3MjcyNywiaWF0IjoxNzMzNjU3NDM1fQ.lFTENdZbCL2Q7xCiw5w8CCNkBDsYgreKuWbhCQE2epU"
const decode = jwt.decode(token)
const verify =jwt.verify(generatetoken,secrate)
console.log(generatetoken)
console.log(decode)
console.log(verify)