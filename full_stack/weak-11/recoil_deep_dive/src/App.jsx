import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { Job, Massagings, MyNetworks, Notifications, TotalNotification } from './store/atoms/atom'

function App() {
  
  return (
  <div>
    <RecoilRoot>
    <TopBar/>
    </RecoilRoot>
  </div>
  )
}

function TopBar(){
  const Jobs = useRecoilValue(Job)
  const Massaging =useRecoilValue(Massagings)
  const Notification =useRecoilValue(Notifications)
  const MyNetwork = useRecoilValue(MyNetworks)
  const totalNotificationCount = useRecoilValue(TotalNotification)
  
  return  <div>
 
  
    <button>Home</button>
    <button>My Network({MyNetwork >= 100 ? "99+":MyNetwork})</button>
    <button>Jobs({Jobs>= 100 ? "99+":Jobs})</button>
    <button>Massaging({Massaging})</button>
    <button>Notification({Notification})</button>
    <button>Me ({totalNotificationCount})</button>
  
   </div>
}

export default App
