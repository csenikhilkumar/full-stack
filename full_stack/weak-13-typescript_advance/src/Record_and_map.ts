// Records
type record = {
    [key:string]:number
}
type user0 = Record<string,number> //string means what is the type of key , number means whats is the type of value 

const ob:user0= {
    "hey":3284230
}







// map 
type typeOf = {
    name:string,
    age:number,
    email:string
}


const user = new Map<string,typeOf>()
user.set("user1",{name:"nikhil",age:30,email:"dosjcos@gamil.com"})
user.set("292@",{name:"nikhil",age:29,email:"wede@gmail.com"})



const user4 =user.get("user1")
const user5 = user.get("292@")
console.log(user4)