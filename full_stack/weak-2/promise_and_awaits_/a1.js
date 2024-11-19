function setpromisified( ms){
const a = new Promise((n)=>setTimeout(n,ms))
return a
}

function nam(){
    console.log("hello  my name is nikhil")
}


// setpromisified(2000).then(nam)
//  given uper callback  is not callback hell


// what is callback hell?
function hello(){
    console.log("hello")
}

function hii(){
    console.log("hiii")
}

function  n (){
    console.log("hey")
}
// setTimeout(function(){
//     console.log("1st  second  is run....");
//     setTimeout(function(){
//         console.log("2nd second is run .. ")
//     },2000)
//       setTimeout(function (){
//         console.log("3rd  second is run  ..  ")
//       },5000)
// },1000)

// this is the example of why  promise is better then callback



// setpromisified(2000).then(n)
// setpromisified(4000).then(hii)
// setpromisified(5000).then(hello)

// promise chaining 
setpromisified(2000).then(function(){
    console.log("hey")
    return setpromisified(3000).then(function(){
        console.log("hii")
        return setpromisified(5000).then(function (){
            console.log("hello  am  nikhil")
        })
    })
})


let 