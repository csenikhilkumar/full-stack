import { useState } from "react";

export const Button = function () {
  
  const [inputVal,setInputVal] = useState("")


  const disabled = inputVal.trim() !== ""
  
  return (
    <div className=" h-screen bg-[#012b5a] flex justify-center items-center">
      
        <div className=" flex flex-col items-center ">
          <div className="py-15" >
            <input type="type" placeholder="Enter Email" className="bg-blue-300 rounded-2xl px-45 py-3  outline-none" onChange={(e)=>setInputVal(e.target.value)}  />
          </div>
          <div>


            <button
              className={`px-45 py-3 my-2 mx-6 cursor-pointer  rounded-2xl text-2xl ${
                disabled ? "bg-green-500" : "bg-gray-500"
              }`}
              


            >
              {" "}
              Submit
            </button>
          
        </div>
      </div>
    </div>
  );
};
