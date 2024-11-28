const arr = [2,4,5,6,7,8,9]
const nick=[2,4,5,6]

// function multiplier(a){
//     for(let i = 0 ;i<=a.lenght;i++){
//         console.log(a[i]*2)
//         i=i+1
//     }
// }
// multiplier(arr)
const emptyarr =[]
function multiplier(a,b){
 console.log(a*2)
 console.log(b+3)

}
function add(a){
    return a+2
}

const ans=arr.map(multiplier)
emptyarr.push(ans)
// console.log(ans)