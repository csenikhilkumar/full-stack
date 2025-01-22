import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  const todos =[{
    title:"i am goto gym ",
    done:false
  },
{
  title:"My name is  nikhil i am going to collage",
  done:true
}]

const todoComponents =todos.map(
  (todo,index)=><Todo key={index}title={todo.title}done={todo.done}/>)
  return (
   <div>
     {todoComponents}

   </div>
  )
}
function Todo({title,done}){
  return(
    <>
      {title} - {done ? "done" : "not done"}
    </>
  )
}

export default App
