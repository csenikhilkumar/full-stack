interface User {
    name:String;
    age:number;
}

function sumofage(user1:User,user2:User){
    return user1.age+user2.age
}

const user1:User ={
    name:"nikhil",
    age:25
}

const user2:User = {
    name:"hitu",
    age:26
}
user1.name="nick"  // in this condition i able to change the name without any problems , when i want to dont chnage the any propertie of objects , i can use readonly method in ts, the example is below here
const sum =sumofage(user1,user2)
console.log(sum)



// readonly object functionality 
type name = {
    readonly name : string
}

function readonly(obj:name):string{
    return "hello"+obj

}


const obj:name = {
    name:"nikhil"
}

// obj.name = "hero"
console.log(readonly(obj))