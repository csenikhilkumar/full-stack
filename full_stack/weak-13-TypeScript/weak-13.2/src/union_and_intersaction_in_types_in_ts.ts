// intersaction in type 
type employee = {
     name :string;
     startDate:string;
}

type manager = {
    name : string;
    department:string;
}


type newEmployee = manager & employee



const emp1:employee ={
    name:"sachin",
    startDate:"01-10-2023"
}


const man1:manager = {
    name : " nikhil",
    department:"cse"
}

const newemp : newEmployee = {
     name:"nikhilkumar",
     startDate:"1-11-2011",
     department:"senior soft engg.. "
}





// intersaction in type 
type ball = {
     color:string;
     line:string
}

type scale ={
    metol:string;
    inches:number
}

type bag = ball | scale

const newBag:bag = {
    color:"red",
    line:"white",
    inches:2
}