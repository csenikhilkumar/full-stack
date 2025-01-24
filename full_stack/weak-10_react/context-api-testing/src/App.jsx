
import React, { useState, useContext, createContext } from 'react';

const CountContext = createContext()
function Provider({children}){
  const [count,setCount]=useState(0);
  return(
 
  <CountContext.Provider value={{count,setCount}}>
    {children}
    </CountContext.Provider>
  )
}


function Increase(){
  const {setCount}=useContext(CountContext)

  return(
  <button onClick={()=>setCount(count=>count+1)}>increase</button>
  )
}
function Decrease(){
  const {setCount}=useContext(CountContext)
  return( 
  
      <button onClick={()=>setCount(count=>count-1)}>decrease</button>
  )
}


function Counter(){
  const {count}=useContext(CountContext)
 
  return<>
   <h1>{count}</h1>
  <Increase/>
  <Decrease/>
  
  </>
}
function App() {
  

  return (
    <>
    <Provider>
    <Counter/>
    </Provider>
    </>
  )
}

export default App
