import { useEffect, useRef, useState } from 'react'
import './App.css'





function App() {
  
   const [messages,setMessages]= useState(["hii there","hello"])
   const InputRef = useRef<HTMLInputElement>(null);
   const wsRef = useRef();


   useEffect(()=>{

      const ws = new WebSocket("ws://localhost:8080")
      ws.onmessage = async (event) => {
         const text = await event.data;  
       setMessages(m =>[...m, text])
      }
      wsRef.current=ws
      ws.onopen = () =>{
        
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
      }
      return ()=>{
        ws.close
      }
   },[])




  return (
    <>
    <div className=' flex flex-col justify-between h-screen bg-black'>
      <div className='h-[90vh]'>
          {messages.map((msg,index)=> <div key={index} className='pt-14'> <span className='bg-green-500 w-32 rounded-md text-black p-4 m-8'>{msg || "⚠ Empty Message"}</span> </div>)}
    
      </div>
   
    <div className='w-full bg-white flex p-4 gap-7 justify-center'>
       <input className=" px-20 py-2 bg-green-500 outline-none rounded-md" ref={InputRef} ></input>
       <button className=' bg-purple-600 text-white rounded-md px-5 py-1' onClick={() => {
         // @ts-ignore
         const message = InputRef.current.value;
         // Send chat message through WebSocket
         // @ts-ignore
         wsRef.current.send(JSON.stringify({
           type: "chat",
           payload: {
              message
           }
         }))

       }} >Send</button></div>
    </div>
    </>
  )
}

export default App
