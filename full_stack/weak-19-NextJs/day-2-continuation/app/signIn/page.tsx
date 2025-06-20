"use client"
import Link from "next/link";
import { Input } from "../components/input";
import axios from "axios";
import { ReactElement, useRef } from "react";

export default function SignIn(){
    const input1Ref = useRef<HTMLInputElement>(null)
    const input2Ref = useRef<HTMLInputElement>(null)
    return(<>
     <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div className="h-72  bg-gray-400 rounded-md">
            <Input ref={input1Ref} text="email"></Input>
            <Input ref={input2Ref}text="password"></Input>
            <div className="flex justify-center items-center m-4">
                
                     
                    <button className="bg-purple-700 rounded-md m-9 w-20 cursor-pointer"onClick={()=>{
                        console.log(input1Ref.current?.value)
                        axios.post("http://localhost:3000/api/v1/signIn",{
                            
                    body:{email:input1Ref.current?.value,
                          password:input2Ref.current?.value
                          }
                        })
                    }}>SignIn</button>
                
            </div>
              <div className="text-sm flex justify-center items-center-safe">
                    if you have'nt account?<Link className="text-blue-800" href="http://localhost:3000/signUp">signUp</Link>
                </div>
        </div>
        
     </div>
    </>)
}