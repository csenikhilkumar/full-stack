interface Adress{
    city:string,
    country?:string,//this is called optional parmeters 
    pincode?:number
}

interface User {
    name:string,
    age:number,
    adress:Adress
}


const user1:User = {
   name:"nikhil",
   age:48,
   adress:{
    city:"sikar",

   }
}


function islegel(input:User):boolean{
    if(input.age<=15){
        return false
    }
    else{
        return true
    }

}

console.log(islegel(user1))






// create a interface that is retrun a function 
interface fun1 {
    name :string,
    greet : (a:string)=>string
}


const peaple:fun1 = {
    name:"nikhil",
    greet:(a)=>a
}

const greeting=peaple.greet("nikhil")
console.log(greeting)