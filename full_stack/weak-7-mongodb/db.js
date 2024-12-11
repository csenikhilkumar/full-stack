const mongoose =require ("mongoose");
const userId =mongoose.userId
// const { String, boolean } = require("zod");
const schema =mongoose.Schema;
const user = new schema({
    email:{ type: String, required: true, unique: true },
    password:String,
    username:String
})

const todo =new schema({
    description:String,
    done:Boolean,
    // userId:userId
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true } 
})

const usermodel = mongoose.model('users',user)
const todomodel= mongoose.model('todos',todo)

module.exports={
    usermodel:usermodel,
    todomodel:todomodel
}
