import axios from "axios"
import { json } from "node:stream/consumers"

async function getblogs(){
  const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')
  return response.data
}
export default async function Blogs(){
    const blogs = await getblogs()
    return(
        <div>
            {blogs.map((blog:ITodo) => <Todo title={blog.title} completed={blog.completed}/>)}
        </div>
    )
}

interface ITodo{
    title:string;
    completed:boolean;
}


function Todo({title,completed}:ITodo){
    return(
        <div>
            {title}{completed ? "done":"note done"}
        </div>
    )

}