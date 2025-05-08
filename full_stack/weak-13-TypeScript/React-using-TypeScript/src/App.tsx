
import './App.css'

interface TodoInput{
  title:string,
   description:string,
   done:boolean
}

function App() {
  
  

  return (<div>
    <Todo todo={{
      title:"go to gym ",
      description:"gym is good ",
      "done":false
    }}/>
    </div>
      
    
  )
}


function Todo({todo}:{todo:TodoInput}){
return(<div>
  <h2>{todo.title}</h2>
  <h2>{todo.description}</h2>
  <h2>{todo.done}</h2>
  </div>)
}

export default App
