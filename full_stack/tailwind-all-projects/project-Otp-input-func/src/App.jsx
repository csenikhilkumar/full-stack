import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/inpute'
import { Button } from './components/Button'

function App() {
  const [count,setCount]= useState("")
  const Number = 10
  const [disabled,setDisabled] = useState(true)
  const ref = useRef(Array(Number).fill(0))
  
  
  
  
  return (
    <><div className="h-screen bg-[#012b5a] flex flex-col justify-center items-center">
      <div className=' justify-center items-center'>
      <div className='flex justify-center items-center h-60'>
      {Array(Number).fill(1).map((x, Index) => (
  <Input
    key={Index}
    ref={el => (ref.current[Index] = el)}
    
    onDone={() => {
      if (Index + 1 >= Number) return;
      ref.current[Index + 1].focus();
    }}
    onBack={() => {
      if (Index === 0) return;
      ref.current[Index - 1].focus();
    }}
  />
))}

       
       
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
