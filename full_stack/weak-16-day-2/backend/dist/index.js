"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8080 });
let allSocket = [];
ws.on("connection", (socket) => {
    socket.on("message", (message1) => {
        //@ts-ignore
        const parseMessage = JSON.parse(message1);
        if (parseMessage.type == "join") {
            console.log("join the room " + parseMessage.payload.roomId);
            allSocket.push({
                socket,
                room: parseMessage.payload.roomId,
            });
        }
        if (parseMessage.type == "chat") {
            // let currenUserRoom = allSocket.find((x)=>{x.socket=socket}).room
            let currentUserRoom = null;
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].socket === socket) {
                    currentUserRoom = allSocket[i].room;
                }
            }
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].room === currentUserRoom) {
                    allSocket[i].socket.send(parseMessage.payload.message);
                }
            }
        }
    });
});
