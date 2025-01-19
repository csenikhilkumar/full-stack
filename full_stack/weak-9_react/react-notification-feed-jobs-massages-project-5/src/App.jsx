import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [currenTab,setTab]=useState(1)
 const[tabData,setData]=useState({})
 const [load,setLoad]=useState(true)

 useEffect(function(){
setLoad(true)
fetch("https://jsonplaceholder.typicode.com/todos/"+currenTab)
.then(async res=>{
  const json =await res.json()
  setData(json)
  setLoad(false)
})
 },[currenTab])


function todo1(){
  setTab(1)
}
function todo3(){
  setTab(3)
}
function todo4(){
  setTab(4)
}
function todo2(){
  setTab(2)
}
  return (
    <div>
<button onClick ={todo1}style={{color:currenTab==1?"red":"black"}}>Todo #1</button>
<button onClick={todo2} style={{color:currenTab==2?"red":"black"}}>todo #2</button>
<button onClick={todo3} style={{color:currenTab==3?"red":"black"}}>todo #3</button>
<button onClick={todo4} style={{color:currenTab==4?"red":"black"}}>todo #4</button>
<br />{load ? "loading...." : tabData.title}
</div>
  )
}
export default App
