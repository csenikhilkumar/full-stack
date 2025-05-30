"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 4000 });
wss.on("connection", function (socket) {
    console.log("user connected");
    // setInterval(() => {
    //     socket.send("the sol price is :- "+Math.floor(Math.random()*20))
    // }, 5000);
    socket.on("message", (e) => {
        if (e.toString() == "ping") {
            socket.send("pong");
        }
    });
});
