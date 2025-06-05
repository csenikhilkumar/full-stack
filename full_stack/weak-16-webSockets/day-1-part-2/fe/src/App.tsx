import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setSocket] = useState()
  const inputRef = useRef()
  function SendMessage(){
    if(!socket){
      return
    }

     const sendMessage = inputRef.current.value
     //@ts-ignore
     socket.send(sendMessage)
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:4000")
        //@ts-ignore
    setSocket(ws)
    ws.onmessage=(ev)=>{
       alert(ev.data)
    }
  },[])
  return (
    <>
      <div>
       <input ref={inputRef} type="text" placeholder='Message' />
        
       <button  onClick={SendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
