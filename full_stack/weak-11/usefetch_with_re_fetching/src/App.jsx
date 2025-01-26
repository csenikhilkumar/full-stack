import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useprew } from "./hooks/Useprew_hook";

function App() {
  const [count, setCount] = useState(0);// first i'll define state of components 
  const ref =useprew(count) // first import the custome hook then i'll define useprew hook and call the hooks passing count argument
  

  return (
    <>
    <p>current state{count}</p> {/* i will print the count state on web page  */}
      <button
        onClick={() => { //this function is called arrow function this is calling up to press counter button 
          setCount((count => count + 1));// this line of use for increase the value of state 
        }}
      > counter</button>
      <br />privious state {ref} {/* this line  of is is used for printing privious value of counter */}
    </>
  );
}

export default App;
