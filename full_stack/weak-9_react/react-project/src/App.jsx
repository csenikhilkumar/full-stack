import { useEffect, useState } from "react"

//part 1


// function App() {
// let [countervisible,setCountervisible]=useState(true)
// useEffect(function(){
//   setInterval(function(){
//    setCountervisible(C=>!C)
//   },5000)
// return ()=>
//   clearInterval(clock)

// }, [])

// return(
//   <div>
//     hii
//  {countervisible && <Counter></Counter>}
 
//   hello
//   </div>
//  )
// }

// function Counter(){
//   let[count,setCount]=useState(0)
//   console.log(count)
//   console.log(setCount)
//   useEffect(function(){
//     console.log("mount is called")
//    let clock =setInterval(function(){
//       console.log("inside the interva");
//         setCount(count=>count+1)
//       },1000) 
//   return function (){
//     console.log("unmount is get called")
//     clearInterval(clock)}
//   },[])
  
//   console.log("counter")
// function increasecounter(){
//   console.log("mount is called")
//   setCount(count+1)
// }
  // return(
  //   <div>
  //     <h1>{count}</h1>
       {/* <button onClick={increasecounter}>increase</button>  */}
       {/* <button onClick={decreasecounter}>decresee</button>
      <button onClick={resetcounter}>reset</button>  */}
//     </div>
//   )
// }




// part2

function App(){
  let [count,setCount]=useState(0)
  let [count2,setCount2]=useState(0)
function increaseCounter(){
  setCount(count+1)
}
function decreasecounter(){
  setCount2(count2-1)
}

 return(
  <div>

  <Counter count={count} count2={count2}></Counter>
  <button onClick={increaseCounter}>increaseCounter</button>
  <button onClick={decreasecounter}>decreasecounter</button>
  </div>
 )
}

function Counter(props){

useEffect(function(){
  console.log("mount")
  return function(){console.log("unmount")}
},[])
useEffect(function(){
  console.log("count has  changed")
  return function(){
    console.log("hi m no 2 hu")
  }
},[props.count])

return(
  <div>
    Counter!{props.count}
    Counter!{props.count2}
  </div>
)
}

export default App

  