interface User{ 
    Name : string , 
    age : number
}

function isLegel2 (user:User){
     if (user.age <= 15 ){
         console.log("your are not elegeble because your age is  : " ,user.age, " and your name is : " ,user.Name)
     }
     else {
         console.log("you are elegible because is your age is : " ,user.age, " and your name is : " ,user.Name)
     }
}


let User2:User = {
    Name:"nikhil",
    age:115
}

isLegel2(User2)