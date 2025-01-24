import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from "react-router-dom"
import './App.css'
import { useEffect } from "react"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/NEET" element={<Layout/>}>
          <Route path="/NEET/HEY" element={<Component/>}></Route>
          <Route path="/NEET/hello" element={<Component2/>}></Route>
          <Route path="/NEET" element={<Landing/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
          </Route>
      </Routes>
     
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return <>
  <div style={{height:"100vh",background:"red"}}>
  <Header/>
      
      <div style={{height:"90vh",background:"yellow"}}>
        <Outlet/>
      </div>
  
      FOOTER | Contact us
      </div>
  </>
   
}

function Header(){
return <>
      <Link to="/NEET">home</Link> | 
      <Link to="/NEET/HEY">NEET</Link> |
      <Link to="/NEET/hello">HELLO</Link>
</>
}
function ErrorPage(){
  return<>
  <div>
    No Content Found
  </div>
  </>
}

function Component(){
  return(
    <>
    <div>
    hello i am  nikhil whats your name 
    </div>
    </>
  )
}

function Component2(){
 return <>

  <div>
  hello i am currently in my collage
  </div>
  </>
}

function Landing(){
  const navigate=useNavigate()
  useEffect(function(){
   const clean= setInterval(function(){
    console.log("mount"),
      
        navigate("/NEET")
      
    },5000)
    return (function(){
      clearInterval(clean)
    })
  },[])
  
  return<>
  <div>home page </div>
  {/* <button onClick={RedirectPage}> go back to NEET page</button> */}
  </>
}

export default App
