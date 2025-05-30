import { DashBoard } from "./Pages/dashBoardPage";
import "./App.css";
import { SignUp } from "./Pages/SignUp";
import { SignIn } from "./Pages/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function  App(){
  return <>
  <BrowserRouter>
      <Routes>
          <Route path="/signUp" element={<SignUp /> }></Route>
          <Route path="/signIn" element={<SignIn /> }></Route>
          <Route path="/DashBoard" element={<DashBoard /> }></Route>
      </Routes>
  </BrowserRouter>
  
  </>
}