const mongoose = require("mongoose");

const Schema =mongoose.Schema;
const userId =mongoose.userId;

const user =new Schema({
    email:String,
    password:String,
    username:String
})

const todo =new Schema({
    tital : String,
    done:Boolean,
    userId : { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }
})

const usermodel =mongoose.model("users",user)
const todomodel = mongoose.model("todos",todo)

module.exports={
    usermodel:usermodel,
    todomodel:todomodel
}

