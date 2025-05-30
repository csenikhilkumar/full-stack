import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import axios from "axios";
import {BACKEND_URL} from "../config"
import { useNavigate } from "react-router-dom";


export function SignUp(){
    const NameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const Navigate = useNavigate()
      

    async function signup(){
        const name = NameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}`+"/user/v1/signUp",{
                name,
                email,
                password
                
            
        })
        
        alert("you have been signed Up!")
        Navigate("/SignIn")

    }
 
    return(<>
          <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
                 <div className="bg-white rounded-xl border min-w-48 p-8">
                    <Input placeholder="enter you Name" ref={NameRef} ></Input>
                    <Input placeholder="enter your email edress" ref={emailRef}></Input>
                    <Input placeholder="enter your password " ref={passwordRef}/>
                    <div className="flex justify-center pt-4"><Button onClick={signup} variant="primary" text="SignUp" FullWidth={true} loading={false}></Button></div>
                    

                 </div>
          </div>
    </>)
}