import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/inpute'
import { Button } from './components/Button'

function App() {
  const [count,setCount]= useState("")
  const [disabled,setDisabled] = useState(true)
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  
  
  
  return (
    <><div className="h-screen bg-[#012b5a] flex flex-col justify-center items-center">
      <div className=' justify-center items-center'>
      <div className='flex justify-center items-center h-60'>
       <Input refe={ref1} onDone={()=>{ref2.current.focus()}} onBack={()=>{setDisabled(true)}}></Input>
       <Input refe={ref2} onDone={()=>{ref3.current.focus()}} onBack={()=>{ref1.current.focus()}}></Input>
       <Input refe={ref3} onDone={()=>{ref4.current.focus()}} onBack={()=>{ref2.current.focus()}}></Input>
       <Input refe={ref4} onDone={()=>{ref5.current.focus()}} onBack={()=>{ref3.current.focus()}}></Input>
       <Input refe={ref5} onDone={()=>{setDisabled(false)}}   onBack={()=>{ref4.current.focus()}}></Input>
       
       </div>
       
       
      
      
      <div className='flex justify-center items-center'>
       <Button disabled={disabled}>Submit</Button>
       </div>  
       </div>
    
    </div>
     
      </>
  )
}

export default App
