interface people{
    name:string,
    age:number
    isLegel:()=>boolean
}


class echo implements people{

    constructor(public name:string,public age:number){
        // this.name =name
        // this.age= age
    }
    isLegel(){
        return this.age >= 18 ;
    }
}


let user4 = new echo("nikhil",25)
console.log(user4.name)
console.log(user4.age,user4.isLegel())