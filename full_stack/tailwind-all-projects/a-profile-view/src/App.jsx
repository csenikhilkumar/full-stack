import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="h-screen flex"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1699891730676-037bed3c1bed?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
       
        <div className="bg-white w-100 h-230 border-r border-gray-300 ml-8">
          <div className="flex justify-between">
          <div className="flex bg-blue-950 w-33 rounded-2xl m-4 "> 
            <img className="w-10 rounded-4xl " src="https://imgs.search.brave.com/Z3O-xPzfodswwean2INdkqluPGPLFwEtsVn5O3xo89s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L3py/TUJSLnBuZw" alt="" />
            <div className="flex">
              <div>Webinar</div>
            <div className="text-blue-700">.gg</div></div>
           
          </div>
          <div ><img className="h-8 rounded-2xl m-4" src="https://avatars.githubusercontent.com/u/172130720?v=4" alt="" /></div>
          </div>
          
          <div className="flex justify-between p-3 hover:bg-gray-300 cursor-pointer">
            Home
            <img
              className="h-5"
              src="../src/images/icons8-home-50.png"
              alt=""
            />
          </div>
          <div className="flex justify-between p-3 hover:bg-gray-300 cursor-pointer">
            Webinar
            <img
              className="h-5"
              src="src/images/icons8-webinar-24.png"
              alt=""
            />
          </div>
          <div className="flex justify-between p-3 hover:bg-gray-300 cursor-pointer">
            Billing
            <img
              className="h-5"
              src="src/images/icons8-billing-50.png"
              alt=""
            />
          </div>
          <div className="flex justify-between p-3 hover:bg-gray-300 cursor-pointer">
            User Management
            <img
              className="h-5"
              src="src/images/icons8-management-32.png"
              alt=""
            />
          </div>
          <div className="flex justify-between p-3 hover:bg-gray-300 cursor-pointer">
            Settings
            <img
              className="h-5"
              src="src/images/icons8-settings-50.png"
              alt=""
            />
          </div>
        </div>

        {/* Main content */}
        <div>
          <div className="p-25"></div>
          <div className="flex bg-white h-180 w-400 mr-8">
            <div
              
              className="h-60 w-60 border border-gray-300 rounded-2xl ml-8 mr-8 shadow relative overflow-visible"
            >
              {/* OVERFLOWED DIV */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-visible">
                <img
                  className="h-20 w-20 rounded-2xl"
                  src="https://avatars.githubusercontent.com/u/172130720?v=4"
                  alt=""
                />
              </div>

              {/* Profile Text Info */}
              <div className="mt-25 text-center px-4">
                <b>
                  <div>Nikhil Kumar</div>
                </b>
                <div className="text-gray-500 text-sm">nikhil@gmail.com</div>
                <div className="text-gray-500 text-sm">37392020209</div>
                <div className="text-gray-500 text-sm">Rajasthan, India</div>
              </div>
            </div>


            <div>
              <div className="ml-10 mt-10 mb-30">
                <div>Monday,14 October 20025</div>
                <div className="text-blue-950 text-3xl">
                  <h1>
                    <b>Good Morning,Nikhil! 👋</b>
                  </h1>
                </div>
              </div>

              <div class="max-w-xl mx-auto bg-white shadow-lg rounded-xl border border-gray-300 ">
                <div class="p-6 border-b flex items-center justify-between">
                  <h2 class="text-xl font-semibold">
                    📅 Monday, 14 October 2024
                  </h2>
                  <div class="space-x-2">
                    <button class="text-xl">⬅️</button>
                    <button class="text-xl">➡️</button>
                  </div>
                </div>

                <div class="divide-y">
                  <div class="p-4 flex items-start space-x-4">
                    <div class="text-lg font-bold w-24">11:30 AM</div>
                    <div>
                      <div class="flex items-center space-x-2 text-sm text-red-600 font-semibold">
                        <span>Live</span>
                        <span>📹</span>
                      </div>
                      <div class="text-lg font-medium">UX Webinar</div>
                    </div>
                  </div>

                  <div class="p-4 flex items-start space-x-4">
                    <div class="text-lg font-bold w-24">11:30 AM</div>
                    <div>
                      <div class="flex items-center space-x-2 text-sm text-blue-600 font-semibold">
                        <span>Upcoming</span>
                        <span>🎥</span>
                      </div>
                      <div class="text-lg font-medium">My first Webinar</div>
                    </div>
                  </div>

                  <div class="p-4 flex items-start space-x-4">
                    <div class="text-lg font-bold w-24">11:30 AM</div>
                    <div>
                      <div class="flex items-center space-x-2 text-sm text-blue-600 font-semibold">
                        <span>Upcoming</span>
                        <span>🎥</span>
                      </div>
                      <div class="text-lg font-medium">Important Webinar</div>
                    </div>
                  </div>

                  <div class="p-4 flex items-start space-x-4">
                    <div class="text-lg font-bold w-24">11:30 AM</div>
                    <div>
                      <div class="flex items-center space-x-2 text-sm text-blue-600 font-semibold">
                        <span>Upcoming</span>
                        <span>🎥</span>
                      </div>
                      <div class="text-lg font-medium">Webinar 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-40 mt-55 h-80 w-80 border border-gray-300 rounded-xl p-6">
  <div className="flex space-x-10">
    {/* Schedule a Webinar */}
    <div className="flex flex-col items-center">
      <div className="h-20 w-20 bg-blue-400 rounded-xl flex items-center justify-center text-2xl">
        🗓️
      </div>
      <div className="mt-2 text-sm font-semibold text-center">Schedule a Webinar</div>
    </div>

    {/* Join a Webinar */}
    <div className="flex flex-col items-center">
      <div className="h-20 w-20 bg-blue-400 rounded-xl flex items-center justify-center text-2xl">
        ➕
      </div>
      <div className="mt-2 text-sm font-semibold text-center">Join a Webinar</div>
    </div>
  </div>

  <div className="flex flex-col items-center mt-11">
      <div className="h-20 w-20 bg-blue-400 rounded-xl flex items-center justify-center text-2xl">
        🗓️
      </div>
      <div className="mt-2 text-sm font-semibold text-center">Schedule a Webinar</div>
    </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
