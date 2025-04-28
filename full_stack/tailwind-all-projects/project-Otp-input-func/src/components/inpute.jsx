import { useEffect, useState } from "react"

export const Input = function ({refe,onDone,onBack}){
    const [inputVal,setInputVal]= useState("")

    
    return(<>
    <div>
        <input type="text" className="bg-[#183e6b] w-10 h-13 rounded-2xl m-2.5 px-4 text-white outline-none" value={inputVal} ref={refe} onKeyUp={(e)=>{
            if(e.key=="Backspace"){
                onBack()
                //go back logic 
              }
        }
             
        } onChange={(e)=>{
              const val = e.target.value
              
             if( val=="1" || val=="2" || val=="3" || val=="4" || val=="5" || val=="6" || val=="7" || val=="8" || val=="9" ){
                setInputVal(val)
                onDone()
              }
        }}/>
    </div>
    
    
    </>)
    
}