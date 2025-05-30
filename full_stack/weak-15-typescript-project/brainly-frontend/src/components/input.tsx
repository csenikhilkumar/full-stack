import { useState } from "react";

export function Input({ref,placeholder}:{placeholder:string; ref?:any}){
    
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-4 m-2"ref={ref} />
    </div>
}