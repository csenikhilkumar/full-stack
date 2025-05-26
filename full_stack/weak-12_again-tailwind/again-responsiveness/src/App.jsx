import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 rounded-2xl">
        <div className="bg-blue-200 col-span-6 rounded-3xl">hi my name is nikhil</div>  {/* {border radius is persent on this code  */}
        <div className="bg-red-200 col-span-4 rounded-3xl">hello</div>
        <div className="bg-yellow-200 col-span-2 rounded-3xl">hi what are you doing</div>
      </div>
    </>
  );
}

export default App;
