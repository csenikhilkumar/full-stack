const {admin}=require("../database/db")


 async function adminAuthmiddel(req,res,next){
    console.log(req.headers)
    const userName= req.headers.userName
    // const password =req.headers.password
    const checkadmin = await admin.find({
        userName:userName 
    })

    if (checkadmin){
      req.userId = res._id
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