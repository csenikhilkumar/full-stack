import { useState } from "react"

function App() {
const [posts,setPosts]=useState([])
const PostComponents=posts.map(post=>(<PostComponent
  Name={post.Name}
  subtitle={post.subtitle}
  time={post.title}
  image={post.image}
  description={post.description}></PostComponent>)
)
function addPosts(){
  setPosts([...posts,{
    Name:"Nikhil",
    subtitle:"10k followers",
    time:"10min ago",
    image:"https://files.oaiusercontent.com/file-6YQD6muMET3t72unoTtAAp?se=2025-01-18T05%3A34%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd9cd24a2-47f4-43c7-b9c5-f1b47af85312.webp&sig=ZggDarKYywZv5EYVrLZ4vjvS%2BHh2UH1rLqS6UIEVurI%3D",
    description:"hello my name is nikhil and i am from bidasar currently i persuing in b.tech 3rd year in sobhasaria group of inst,(sikar)"
  }])
}
  return (
<div style={{background:"#dfe6e9",height:"100%"}}>
<button onClick={addPosts}>add Post</button>
  <div style={{display:"flex",justifyContent:"center",height:"100vh"}}>
 <br /><div>{PostComponents}</div><br />
 </div>
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


