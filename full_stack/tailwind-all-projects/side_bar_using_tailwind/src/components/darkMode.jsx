import { useState } from "react";

export function DarkMode (){
     

     return(<>
     
     <div className="bg-white dark:bg-black h-screen text-black dark:text-white" >
      <button onClick={()=>{
         console.log(document.querySelector("html").classList.toggle("dark"))
      }}>togell</button>
      <div>hii</div> 

     </div>
     </>)
}