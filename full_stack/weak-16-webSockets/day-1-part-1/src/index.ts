import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:3000})

wss.on("connection",function(socket){
    console.log("user connected")
    // setInterval(() => {
    //     socket.send("the sol price is :- "+Math.floor(Math.random()*20))
    // }, 5000);
    socket.on("message",(e)=>{
        if(e.toString() == "ping"){
            socket.send("pong")
        }
    })
    
})