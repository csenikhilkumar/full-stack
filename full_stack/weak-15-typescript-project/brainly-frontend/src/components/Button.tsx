import type { ReactElement } from "react"

    interface ButtonProps{
        variant : "primary" | "secondary";
        text:string;
        startIcon?:ReactElement;
        size:"sm" | "md" | "lg";
        onClick?:()=>void;
        FullWidth?:boolean;
        loading?:boolean
       
    }


    const VariantClasses = ({
        "primary":"bg-purple-600 text-white p-4",
        "secondary":"bg-purple-200 text-purple-400 p-4"
    })

    const sizevariant = ({
        "lg":"p-6",
        "md":"p-3",
        "sm":"p-2"
    })
  const defaultStyles = "px-4 py-2 rounded-md flex items-center"
  
  
    export function Button({variant,text,startIcon,size,onClick,FullWidth,loading}:ButtonProps){
          return <button onClick={onClick} className={ VariantClasses[variant]+ " " + defaultStyles + sizevariant[size] + `${ FullWidth ? " w-full flex  justify-center" : ""}` + `${loading ? " opacity-45":""}`}  disabled={loading}>
           
            <div className="pr-2">{startIcon}</div>{text}</button>
    }