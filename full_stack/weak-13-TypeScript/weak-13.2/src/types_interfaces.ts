// type Name = number


// function Check (a:Name,b:Name):Name{
//     return a+b
// }

// console.log(Check(8,39))



// function greet(name:string):string{
//     return name
// }



// console.log(greet("hello my name is nikhil "))







// // Interfaces

// interface USER {
//     Name:string,
//     age:number,
//     adress?:{  // the adress is being optional , let say a condition if you defining adress and cant fill all fields in this case the compiler is complaining the all fields are required and if you are not define the adress field everything is okey , it means if you define the adress and define its one propertie the compiler again complain , the complain is if you are fill one field of the adress all field must be required 
//         city:string,
//         country:string,
//         pincode:number
//     }
// }


// const newUser:USER = {
//     Name :"nikhil",
//     age:26

// }

// const user:USER = {
//     Name :"Nikhil",
//     age:21,
//     adress:{
//         city:"sikar",
//         country:"India",
//         pincode:373833
//     }
// }

// function isLegel(user:USER):boolean{
//     if(user.age<=15){
//         return false
//     }
//     else{
//         return true
//     }
// }


// console.log(isLegel(newUser))