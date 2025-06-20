"use client"
import Link from "next/link";
import { Input } from "../components/input";
import axios from "axios";
import { useRef } from "react";

export default function SignUp(){
    const inputRef1 = useRef<HTMLInputElement>(null)
    const inputeRef2 = useRef<HTMLInputElement>(null)
    const inputeRef3 = useRef<HTMLInputElement>(null)
    return(<>
     <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div className="h-76  bg-gray-400 rounded-md">
            <Input ref={inputRef1} text="username"></Input>
            <Input ref={inputeRef2}text="email"></Input>
            <Input ref={inputeRef3} text="password"></Input>
            <div className="flex justify-center items-center m-4">
                <button className="bg-purple-700 rounded-md m-5 w-20 cursor-pointer" onClick={()=>{
                        axios.post("http://localhost:3000/api/v1/signUp",{
                              
                                username:inputRef1.current?.value,
                                email:inputeRef2.current?.value,
                                password:inputeRef3.current?.value
                              
                        })
                }}>SignUp</button>
            </div>
            <div className="flex justify-center items-center m-2 text-sm ">
                if you have allready account <Link className="text-blue-700 " href="http://localhost:3000/signIn"><b>signIn</b></Link>
            </div>
        </div>
        
     </div>
    </>)
}