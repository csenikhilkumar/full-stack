import {atomFamily} from "recoil"
import {Todo} from  "../jsFiles/index"

export const idSelector = atomFamily({
    key:"nick",
    default:id=>{
    
        const response = Todo.find(x=>x.id===id)
        
        return response
    },
})