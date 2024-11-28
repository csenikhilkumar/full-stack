const axios = require("axios")

// async function fatch(){
// const response = await fetch(" https://www.postb.in/1732455823409-0626420693006",{
//     method:"POST"
// });
// const data = await response.text()
// console.log(data)
// }

async function fatch(){
    // this is the request config
    const response= await axios({url:"https://httpdump.app/dumps/26b886a2-05ef-43a3-80e2-c300014245ce",
method:"POST",headers:{
    Authorization:"nikhil 13245"
},
data:{
    usrename:"nikhil"
}})
    console.log(response.data)
}
fatch()