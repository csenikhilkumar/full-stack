interface ButtonDesign {
   type : "primary"
   text:string
   

   
}




export function Button ({type,text}:ButtonDesign){
    return(
       <button className={`${type =="primary" ? " bg-purple-600 text-white" : " bg-gray-400 text-purple-500" }`+ " rounded-md px-5 py-1"}>{text}</button>
    )
}