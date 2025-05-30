import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios"

export function useContent(){
    const [contents,setContents] = useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}`+`/user/v1/content`,{
        headers:{
            "token":localStorage.getItem("token")
        }
    })
    .then((response)=>{setContents(response.data.content)})
    }
    
 useEffect(()=>{
    refresh()
    let interval = setInterval(()=>{
        refresh()
    },10*1000)
    return ()=>{
        clearInterval(interval);
    }
 },[])

    return {contents,refresh}

}