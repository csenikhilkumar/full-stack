
import { useRef } from "react";

function useDebounce(originalfn) {// this function is used for stopping the privious clock and restart the second clock
  const ref = useRef();// this hook hold the current clock's data
  const fn = () => {
    clearTimeout(ref.current);// if i wrote something in search bar the clock again again restart this function is used for stopping the privious clock
    ref.current = setTimeout(originalfn, 300);// this line of code reprents that after the origionalfn should be called the clock will be start 
  };
  return fn; // use debounce function returns fn variable
}

function App() {
  function SearchItem() {  // i will declare this function for console the data
    // fetch("hii/there")
    console.log("hii there");
  }

  const debounfn = useDebounce(SearchItem);// if the usedebounce hook is called the the hook will call the searchItem function for console data

  return (
    <>
      <input type="text" placeholder="saerch items" onChange={debounfn}></input>{/* when the search bar will be changed the debuounfn variable should be called */}
    </>
  );
}

export default App;
