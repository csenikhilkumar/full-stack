const {user}=require("../database/db")

async function userAuthmiddle(req,res,next){
    const username = req.headers.username;
    const password =req.headers.password
    console.log(username)
    const checkuser = user.findOne({
        username:username,
        password:password
    })
    if(checkuser){
        req.userId=res.id
        next()
    }
    else{
        res.json({
            "msg":"user dos'nt exist please try again"
        })
         
    }
}





module.exports={
    userAuthmiddle:userAuthmiddle
}
