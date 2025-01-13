const {admin}=require("../database/db")


 async function adminAuthmiddel(req,res,next){
    console.log(req.headers)
    const username= req.headers.username
    // const password =req.headers.password
    const checkadmin = await admin.find({
        username:username 
    })

    if (checkadmin){
      req.adminId = res.id
      next()
    }
    else{
        res.json({
            "msg":"user dos'nt exist please write right username"
        })
    }

 }

module.exports={
    adminAuthmiddel:adminAuthmiddel
}