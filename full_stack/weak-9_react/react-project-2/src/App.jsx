import { useState } from "react"

function App() {

  return (
<div style={{background:"#dfe6e9",height:"100vh",}}>
  <div style={{display:"flex",justifyContent:"center"}}>
    <div>
      <ToggleMassage></ToggleMassage> {/* calling to the ToggleMassge function */}
      <ToggleMassage></ToggleMassage>
      <ToggleMassage></ToggleMassage>
 <br /><div><PostComponent
 Name={"Nikhil"}
 subtitle={"20 followers"}
 time={"2min"}
 image={"https://files.oaiusercontent.com/file-6YQD6muMET3t72unoTtAAp?se=2025-01-18T05%3A34%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd9cd24a2-47f4-43c7-b9c5-f1b47af85312.webp&sig=ZggDarKYywZv5EYVrLZ4vjvS%2BHh2UH1rLqS6UIEVurI%3D"}
 description={"hello guy my name is nikhil please follow me"}></PostComponent></div><br />
 <div>
 <PostComponent
  Name={"Ai engineer"}
  subtitle={"promoted"}
  
  image={"https://files.oaiusercontent.com/file-6YQD6muMET3t72unoTtAAp?se=2025-01-18T05%3A34%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd9cd24a2-47f4-43c7-b9c5-f1b47af85312.webp&sig=ZggDarKYywZv5EYVrLZ4vjvS%2BHh2UH1rLqS6UIEVurI%3D"}
  description={"hello guy my name is hitesh please follow me"}></PostComponent></div>

 </div>
 </div>
</div>
  )
}

const ToggleMassage=()=>{ 
  console.log(" rerendering ")
  // if i am not define statevariabe react dosnt update any web component 
  const [visible,setVisible]=useState(true)//this variable update the website's components

  return(
    <div>
      <button onClick={()=>setVisible(!visible)}>togglemassage</button>{/*this button chages the content acording to the condition */}
      {visible && <p>hi kaise ho sb</p>}{/*this is ternary operator and this operator updates the content acording to the condition like if visible is true the content is visible on the web page and visible is false the content dos'nt show on the my own website  */}
    </div>
  )
}
function PostComponent({Name,subtitle,time,image,description}){//i am passing the arguments using props.Props means the any argument is exports through the main function and import into another functin this argument help us to update any content on the website
  return(
    
    <div style={{width:200,backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20}}>
      <div style={{display:"flex"}}>
      <img src={image} style={{
        height:30,
        width:30,
        borderRadius:20
      }} />
      <div style={{fontSize:10,marginLeft:20}}>
        <b>
         {Name}
        </b>
        <div>{subtitle}</div>
        <div>
          {(time !== undefined)?<div style={{display:"flex"}}>{/*this is conditional rendering and in this condion statement time not define in main function the clock image dosnt show on the web page */}
        <div>{time}</div>
        <img src="https://static.vecteezy.com/system/resources/previews/019/873/851/non_2x/clock-icon-transparent-free-icon-free-png.png" alt="clock" style={{height:12}} />
        </div>:null}
        </div>
        </div>
        </div>
        <div style={{fontSize:10,marginTop:20}}>
          {description}
          </div>
    </div>
  )
}

export default App

