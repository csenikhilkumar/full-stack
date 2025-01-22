import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
      <Link to="/">home</Link><br />
      <Link to="/NEET">NEET</Link><br />
      <Link to="/NEET/hello">HELLO</Link>
      <Routes>
          <Route path="/NEET" element={<Component/>}></Route>
          <Route path="/NEET/hello" element={<Component2/>}></Route>
          <Route path="/" element={<Landing/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
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
  return<>
  <div>home page </div>
  </>
}

export default App
