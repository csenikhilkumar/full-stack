// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react'

import { useEffect } from "react"
import { useState } from "react"

// function App() {
//   const [count,setCount]=useState(0)
//   const [count2,setCount2]=useState(0)\
  
//   function inCreaseCount(){
    
//       setCount(count=>count+1)
//   }
//    function decreaseCount(){
//     setCount2(count=>count-1)
//    }
//    useEffect(function(){
//     setInterval(decreaseCount,8000)
//    },[])

//     useEffect(function (){
//       console.log("above setinterval")
//     const clean =setInterval(function(){
//       inCreaseCount()
     
//     },5000)
//     return ()=>{ 
      
//           clearInterval(clean)}
//     }
//    ,[])

//    useEffect(function(){
//     console.log("the count is updated"+count+"and"+count2)
//    },[count,count2])
 
//   return<div>
//     <div style={{dispaly:"flex"}}>
//       <div style={{background:"red",height: 25,width: 20,paddingLeft: 10,borderRadius:20,paddingTop: 5}}>
//         {count}{count2}
//       </div>
//       </div>
//       <img src="https://static.vecteezy.com/system/resources/thumbnails/015/934/666/small_2x/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg" width={40} style={{cursor:"pointer"}} />
    
//    </div>
// }

// export default App


function App() {
  const [showtimer,setShowtimer]=useState(true)
  useEffect(function(){
    const cleanUp=setInterval(() => {
      console.log("inside interval")
      setShowtimer(showtimer=>!showtimer)
    }, 5000);
    return ()=>{
      clearInterval(cleanUp)
    }
  },[])
   return <div>
{showtimer && <Timer/>}
   </div>
}
const Timer=function(){
const [second,setSecond]=useState(0)
useEffect(function(){
  const cleanUp=setInterval(function(){
    console.log("inside interval")
    setSecond(second=>second+1)
  },1000)
  return ()=>{
    clearInterval(cleanUp)
  }
},[])
return <div>{second}</div>
}
  export default App