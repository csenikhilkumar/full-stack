import { useState,useEffect } from "react"
// export function usePosts (){
//     const [post,setPosts]=useState({})
//     async function Callfetch(){
//      const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//      const json= await response.json()
//      setPosts(json)
//     }
//   useEffect(
//     function (){
//       Callfetch()
//     },[])
//     return post
// }


// export function usefetch(url){

//  const [finaldata,setFinalData]=useState({})

//  async function getPost(url){
//  const fetchdata = await fetch(url)
//  const json = await fetchdata.json()
//  setFinalData(json)
//  console.log(url)
//  console.log("hey")
//  }
//  useEffect(()=>{
//   getPost()},[url])
//   return {
//     finaldata
//   }
//   // return loading
 
// }


export function usefetch(url,timeout) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getPost(url) {
    console.log(url)
    console.log(loading)
    setLoading(true);
    const fetchData = await fetch(url);
    const json = await fetchData.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    console.log("hii")
    getPost(url);
  }, [url]);
  useEffect(()=>{
   const clean= setInterval(() => {
      getPost(url)
    },timeout*1000);
    return ()=>{
      clearInterval(clean)
    }
  },[url])

  return {
    finalData,
    loading
  };
}