import { useState } from "react"

function App() {
   // Rolling up The state
   const[currentStateOfBulb,setCurrentState]=useState(true)

  return <>
      <div>
        <ToggleComponent currentStateOfBulb={currentStateOfBulb} setCurrentState={setCurrentState}/>
      </div>
    </>
  
}
function ToggleComponent({currentStateOfBulb,setCurrentState}){
 
  return<>
     <div>
      <ToggleIsOn currentStateOfBulb={currentStateOfBulb}/>
      <ToggleIsOff  setCurrentState={setCurrentState} />
     </div>
  </>
}

function ToggleIsOn({currentStateOfBulb}){
  return<>
{ currentStateOfBulb ? "bulb is on ":"bulb is off "}
</>
}

function ToggleIsOff({setCurrentState}){
function Toggle(){
  setCurrentState(current=>!current)
}

return(
  <>

  <button onClick={Toggle}>bulb is on or off</button>
  </>
)
}
export default App
