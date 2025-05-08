abstract class USER{
    name:string ;
    age:number;
    constructor(name:string ,age:number){
        this.name= name 
        this.age= age 
    };
    abstract greet(): string;
    hello(){
        console.log("hello nikhil bhai whatsapp ")
    }

}

class abs extends USER{
    name:string 
    age:number 
    constructor(name:string, age:number){
        super(name,age)
        this.name =name 
        this.age = age 

    }
    greet(){
        return "hello " + this.name
    }
    
}


const usr = new abs ("ram", 28)
console.log(usr.name)
console.log(usr.age)
console.log(usr.greet(),usr.hello())