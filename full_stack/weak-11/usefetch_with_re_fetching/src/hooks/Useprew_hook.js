import { useEffect } from "react";
import { useRef } from "react";

export function useprew(value){
    const ref =useRef() // this variable is used for storing any value inside the useref hook without any rerendering 

    useEffect(()=>{ // useeefect hook basically used for ignore the rerandre of the components it the fuction should be run
        ref.current=value// this line of code reffer's that what is cuurent state of useref hook and it will be assign in the value the value is argument ,the argument is passing in the functon while the function will be runned

    },[value]) // this is the dependency aaray is use for rerender the useeffect hook ,if hooks value will be changed

    return ref.current // this line of code basically use for retunring the currnt state of useref hook
}// In this function the ref.current's value will be return first then useeffect hook will call and return value 