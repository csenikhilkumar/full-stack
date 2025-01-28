import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { counterAtom, eveSelector } from "./store/atom/counter";

function App() {
  return (
    <>
      <RecoilRoot>
        {" "}
        {/* recoile library use for rerendering  if any subcribed component ,and this used after wrapping the all childs in recoilRoot */}
        <Counter />
        <Button />
        <Iseven />
      </RecoilRoot>
    </>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom); // read the value of counterAtom
  return <div>{count}</div>;
}

function Button() {
  const setCount = useSetRecoilState(counterAtom); //change the value of the state of counterAtom
  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 2)}>Increase</button>
        {/* if the button is clicked the value of count is increased */}
        
        <button onClick={() => setCount((count) => count - 1)}>Increase</button>
        {/* if the button is clicked the value of count is decreased */}
      </div>
    </>
  );
}

function Iseven() {
  const evenorodd = useRecoilValue(eveSelector); // read the value of selector ' evenselector'
  return (
    <div>{evenorodd ? "even" : "odd"}</div> // if the evenorodd selector's number is even the statement does return even and else odd
  );
}

export default App;
