import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import {usefetch} from "./hooks/useFetch"
// function useCounter(){
  
//     const [ count ,setCount]=useState(0)
//     function IncreaseCounter (){
//       setCount(count+1)
//     }
    
    
//     return{
//       count :count ,
//       IncreaseCounter:IncreaseCounter}
//   }


// function App() {
// const {count,IncreaseCounter}=useCounter()

//   return (
//     <>
//     <button onClick={IncreaseCounter}>increase {count}</button>
    
//     </>
//   )
// }


function App(){
  const [posts,setcurrentPost]=useState(1)
const {finalData,loading} =usefetch(`https://jsonplaceholder.typicode.com/todos/${posts}`,10)
if(loading){
  return <div>
    loading...
  </div>
}

return(
    <div>
      <button onClick={()=>{setcurrentPost(1)}}>1</button>
      <button onClick={()=>{setcurrentPost(2)}}>2</button>
      {JSON.stringify(finalData)}
    </div>
  )
}

export default App
