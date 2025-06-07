# how to intialize the postgress database

# first step is :- open the app like neon.tech

then define a schema like :-

create table users (
id serial primary,
username varchar(255) unique not null
email varchar(255) unique not null
password varchar(255) unique not null
created_at timestamp default time stamp
)

# then use pg ui library for sending data into the data base

like this :-

import {Client} from "pg";
import express from "express";
const app = express();
app.use(express.json())

# then connectect to database

i am using uri for connecting to the database
like this :-
const connect_to_db = new Client(my uri);

# then i creat a api for inserting data into the data base

app.post("/signUp"async function(req,res){
const username = req.body.username;
const email = req.body.email;
const password = req.body.password;

# Many attackers are used sql injaction for hack the database , for that reasons i am send the query first for database are understand the query like this :-

const sendQuery = `INSERT INTO users (username,email,password) VALUES($1,$2,$3)`

    const insertSql = connect_to_db.query(sendQuery,[usename,email,password])

})

# connect to the http server and database

async function main (){
await connect_to_db.connect()
console.log("database is connected )
app.listen(3000,()=>{
console.log("sever running on port 3000")
})
}
