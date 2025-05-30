import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn(){
    const NameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const Navigate = useNavigate()

    async function signin(){

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        console.log("Email:", email);
        console.log("Password:", password);

        const response = await axios.post(`${BACKEND_URL}`+"/user/v1/signIn",{
                email,
                password
                
            
        })
        const jwt = response.data.token;
        localStorage.setItem("token",jwt)
        Navigate("/DashBoard")

    }
 
    return(<>
          <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
                 <div className="bg-white rounded-xl border min-w-48 p-8">
                    <Input placeholder="enter your email edress" ref={emailRef}></Input>
                    <Input placeholder="enter your password " ref={passwordRef}/>
                    <div className="flex justify-center pt-4"><Button onClick={signin} variant="primary" text="SignIn" FullWidth={true} loading={false}></Button></div>
                    

                 </div>
          </div>
    </>)
}