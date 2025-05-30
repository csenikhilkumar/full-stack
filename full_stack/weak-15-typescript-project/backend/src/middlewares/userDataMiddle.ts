import env from "dotenv"
env.config()
import  express ,{Request,Response,NextFunction}  from "express";
import jwt from "jsonwebtoken"
// import { string } from "zod";
const app = express();
import cors from "cors"

app.use(cors())
app.use(express.json());
const jwt_secret = process.env.JWT_SECRET as string
async function userDataAuthMiddle(req:Request,res:Response,next:NextFunction){
   
    const token:any = req.headers.token
    const verifytoken = await jwt.verify(token,jwt_secret)
    if(verifytoken){
        //@ts-ignore
        req.userId = verifytoken.id
        next()
    }
    else{
        res.json({message:"unauthorized access "})
    }
}

export default userDataAuthMiddle