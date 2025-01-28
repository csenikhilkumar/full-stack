import { useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
  });

  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  return (
    <div>
      1
      <Increase />
      <Decrease />
      <Count />
    </div>
  );
}
//  syntex:- all component wrapped  into meme method
const Increase = memo(function () { // memo is used for avoid extra rerendering , it means any component rerenders and is it wrapped in a parent component is the parent is changed the child component will be rendered becouse the component is the child of the parent component
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button> {/* if the button is clicked button increase the count's value with the help of setCount */}
    </div>
  );
});

const Decrease = memo(function () {
  return (
    <div>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>{/* if the button is clicked button Decrease the count's value with the help of setCount */}
    </div>
  );
});

const Count = memo(function () {
  <div>1</div>;
});
export default App;
