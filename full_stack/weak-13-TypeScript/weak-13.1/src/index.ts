// Problem : 1 

function One (a:any){
    return a
}

function Two (b:any){
    return(b)
}


function three (fun1:any,fun2:any){
return fun1+fun2
}

console.log(three(One(2),Two(8)))



// Problem : 2 

function isLegel (age:number){
    if(age <= 14){
       console.log("you are not eligible for driving because your age is :" + age + " and you are chile or teenager " )
    }
    else{
        console.log("you are eligible because your age is :" + age + " and you are young " )
    }
}

 isLegel(2)




// Problem: 3 

 function TakeBreak(fun1:()=>string){
     setTimeout(fun1,2000)
 }

 function RunAfterBreak(){
    console.log("hey i am nikhil and working on the typescript ")
    return ("hello")
 }
 
 TakeBreak(RunAfterBreak)


 let fn = ()=>console.log("hii i am nikhil ")

 fn()



 