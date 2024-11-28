const arr = [ 1,3,2,2,2,56,6,6]
// const emp =[]
// for(let i =0; i<=arr.length;i++){
//     if(arr[i]%2==0){
        
//         emp.push(arr[i])
       
//        }
   
    
// }

// console.log(emp)


// filtring function 

function filtering(n){
    if(n%2==0){
        return true
    }
    else{
        return false
    }
}

const ans = arr.filter(filtering)
console.log(ans)