import type { ReactElement } from "react"

    interface ButtonProps{
        variant : "primary" | "secondary"
        text:string,
        startIcon?:ReactElement
       
    }


    const VariantClasses = ({
        "primary":"bg-purple-600 text-white p-4",
        "secondary":"bg-purple-200 text-purple-400 p-4"
    })
  const defaultStyles = "px-4 py-2 rounded-md"
  
  
    export function Button({variant,text,startIcon}:ButtonProps){
          return <button className={VariantClasses[variant]+ " " + defaultStyles} >{startIcon}{text}</button>
    }