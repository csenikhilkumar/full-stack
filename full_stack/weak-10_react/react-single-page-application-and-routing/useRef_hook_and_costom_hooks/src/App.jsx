// import { useRef } from "react"
// import { useEffect } from "react"

import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

// function App() {
//   const inputRef = useRef()
  
//   function Autoredirectcurser(){
//     //  document.getElementById("props").focus()

//     inputRef.current.focus()
   
//     }
//  return<div>
//     <input ref={inputRef} type={"text"} placeholder="email"/>
//     <input  type={"text"} placeholder="password"/>
//     <button onClick={Autoredirectcurser}>submit</button>
//     </div>
    
// }

function App(){
  // a clock with a start and stop button 
  var [currentTime,setCurrentTime]=useState(0)
  const timer=useRef
  // const [timer,setTimer]=useState(0)
  function start(){
    
      const value= setInterval(function(){setCurrentTime(currentTime=>currentTime+1)},1000)
      timer.current=value
      // setTimer(value)
      console.log(value)
      }
      function stop(){
        console.log("rerender")
      clearInterval(timer.current)
      }
  return<>
  <div>
  <h1>{currentTime}</h1>
  <button onClick={start}>start</button>
  <button onClick={stop}>stop</button>
  </div>
  </>
}



export default App
