import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const Bulbcontext = createContext()//this is called context api 


function BulbProvider({children}) {
  const [currentBulb,setBulbstate]=useState(true);
return<>
  <Bulbcontext.Provider value={{ //provide data to bulbcontext this data can accese only component1 and its child,and this data wrapped in object
    currentBulb:currentBulb, // imorting currentbulb state ase key value pairs
    setBulbstate:setBulbstate// importing setbulbstate as key value pairs
   }}>
    {children}
     </Bulbcontext.Provider>
     </>
}


function App() {

  return (
    <>
    <BulbProvider>
      <Component1/>
      </BulbProvider>
    </>
  )
}

function Component1(){
  return <>
     
     <Light/>
     <LightOn/>
    
  </>
}

function Light(){
  const{currentBulb}=useContext(Bulbcontext) // exporting currentBulb's data from contextbolb variable using usecontext hook 
  console.log(currentBulb)
return <>

  {currentBulb ? "bulb is on " : "bulb is off"}
</>
}
function LightOn(){
  const {setBulbstate}=useContext(Bulbcontext) // exporting setbulbstate's data from contextbolb variable using usecontext hook 
  function BulbState(){
       setBulbstate(currentBulb=>!currentBulb)
       console.log("hey")
  }
  return<>
  <button onClick={BulbState}>switch </button>
</>
}

export default App
