import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { counterAtom } from "./store/atom/counter";
import "./App.css";

function App() {
  return (
    <div>
      <RecoilRoot>  {/* recoile library use for rerendering  if any subcribed component ,and this used after wrapping the all childs in recoilRoot */}
        <Counter />
      </RecoilRoot>
    </div>
  );
}

function Counter() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <CurrentCount />

        <Decrease />

        <Increase />
      </div>
    </>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom); // this line of code is refers that the componrnt should be subscribed the recoil library, this component is only read the value of counterAtom 
  return <div>{count}</div>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom); // this line of code is refers that the componrnt should be subscribed the recoil library, this component is update the state of atom 
  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom); // this line of code is refers that the componrnt should be subscribed the recoil library, this component is update the state of atom 
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    </div>
  );
}

export default App;
