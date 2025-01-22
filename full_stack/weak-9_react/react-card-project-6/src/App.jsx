// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function Card({Children}){
//   return(<div style={{background:"black",margin:10,padding:10,borderRadius:20}}>
//    {Children}
//   </div>)
// }

// function App() {
 
//  return(
//   <div style={{color:"black"}}>
//     <Card Children={<div style={{color:"yellow"}}> hi i am nikhil</div>}></Card>
//   </div>
//  )

// }

// export default App


import React from 'react';

function Card({children}){
  return(
    <div style={{
      background:"gray",
      color:"black",
      boxShadow:"2px 2px  5px rgba(0 0 0 0.1)",
      border:1,
      borderRadius:10,
      margin:20,
      padding:10
    }}>
  {children}
    </div>
  )

}

function App(){
return(
  <div style={{}}>
    <Card children={<div> 
      <h2>
        Name
      </h2>
         
         <textarea type="text" />
         <p>
          Hello my name is nikhil whats your name , what you things about me 
         </p>
      </div>}></Card>

      <Card children={<div> 
      <h2>
        Name
      </h2>
         
         <textarea type="text" />
         <p>
          Hello my name is nikhil whats your name , what you things about me 
         </p>
      </div>}></Card>
  </div>
)
}

export default App;
