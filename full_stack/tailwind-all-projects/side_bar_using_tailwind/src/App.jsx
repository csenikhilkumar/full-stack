import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { SideBar1 } from './components/sidebar'
import { DarkMode } from './components/darkMode'
import { MainComponent } from './components/mainContent'
import { SideBar2 } from './components/sidebar2'

function App() {
  const [opensidebar,setOpensidebar]=useState(true)
  

  return (
    <>
     {/* <SideBar1></SideBar1> */}
     {/* <DarkMode></DarkMode> */}
     <div className='flex'>
      <SideBar2 opensidebar={opensidebar} setOpensidebar={setOpensidebar}></SideBar2>
     <MainComponent></MainComponent>
     </div>
     
    </>
  )
}

export default App
