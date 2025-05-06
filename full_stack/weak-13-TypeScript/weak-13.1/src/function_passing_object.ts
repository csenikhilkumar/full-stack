// function object (user:{
//     Name:string,
//     lastname:string,
//     age:number
// }){
// console.log(user.Name,user.lastname)
// console.log("age is : ",user.age)
// }

// const User = {
//     Name : "Nikhil",
//     lastname:"kumar",
//     age:24
// }

// console.log(typeof(User))

// object(User)


//  how to create a type of the object 

// type UserType { //costom type 
//     Name : string ,
//     lastname :string,
//     age : number 
// }

interface UserType { 
    Name : string ,
    lastname :string,
    age : number 
}


function greet (user:UserType){
    console.log(user.Name)
    console.log("lastname ",user.lastname )
    console.log("age is : ", user.age)
}

let allDetail:UserType= {
    Name : "Nikhil",
    lastname:"kumar ",
    age : 25
}
console.log(typeof(allDetail))
greet(allDetail)