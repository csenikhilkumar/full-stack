import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRecoilState,RecoilRoot,useSetRecoilState} from "recoil"
import {idSelector} from "./store/atom/atom"
import { useEffect } from 'react'

function App() {


  return(
    
            <div>
              <RecoilRoot>
                <TodoComponent/>
              <Todo id ={4}/>
              <Todo id ={1}/>
              </RecoilRoot>
            </div>
  ) 

}

function TodoComponent(){
  const todoUpdate  = useSetRecoilState(idSelector(4))

  useEffect(
    function(){
      setInterval(()=>{
      todoUpdate({
        id:"3",
        "Name":"nick",
        "SirName":"k"
        
      })},5000)
    },[])
}

function Todo({id}){
  const [ todoid,settodocount]=useRecoilState(idSelector(id))
 

  return(<>
  { todoid.id}<br/>
      {todoid.Name}
      <br/>
      {todoid.SirName}<br/>
      </>
  )
}



export default App
