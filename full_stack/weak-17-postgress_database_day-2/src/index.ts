import { Client } from "pg";
import express from "express"
import { P_URI } from "./config";
const connect_db=new Client(P_URI)
//Relationships in databases
const app = express()
app.use(express.json())
app.post("/signUp",async function(req,res){
 const {username,email,password,city,country,pincode} = req.body 
try{
 const insertSqlUser = `INSERT INTO users(username,email,password) VALUES ($1,$2,$3) RETURNING id;`
 const insertSqlUserContent = `INSERT INTO addresses(user_id,city,country,pincode) VALUES ($1,$2,$3,$4);`
 connect_db.query("BEGIN;")

 const insertData = await connect_db.query(insertSqlUser,[username,email,password])

 const userId = insertData.rows[0].id;
 const insertData1 = await connect_db.query(insertSqlUserContent,[userId,city,country,pincode])
 await new Promise(x => setTimeout(x,10000))
connect_db.query("COMMIT;")
 console.log(insertData.rows)
 res.json({
    "message":"user succesfully logged in "
 })
}catch(e){
    console.log(e)
    res.status(400).json({
        message:"error while signup"
    })
}

})

app.get("/metaData",async function(req,res){
    const id = req.query.id
    const query1 = "SELECT username,email FROM users WHERE id=$1"
const sendQ = await connect_db.query(query1,[id])

const query2 = "SELECT * FROM addresses WHERE user_id=$1"
const sendQ2 = await connect_db.query(query2,[id])

 res.json({
    "user":sendQ.rows,
    "address":sendQ2.rows
 })
})

app.get("/betterMetaData",async function(req,res){
     const id = req.query.id
     const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.pincode FROM users FULL JOIN addresses ON users.id=addresses.user_id WHERE users.id=$1`
     const sendQ2 = await connect_db.query(query,[id])
     res.json({
        "userDetail":sendQ2.rows
     })
})



async function main(){
    await connect_db.connect()
    console.log("database connected")
    app.listen(3000,()=>{
        console.log("server running on port 3000")
    })
}

main()