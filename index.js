const express = require('express');
const app = express();
const path = require('path'); 
const socketIO = require('socket.io')

app.use('/', express.static(path.join(__dirname,"public")))

const server = app.listen(8080,()=>{console.log("Server Run port:8080")})

const io = socketIO(server)

io.on('connection',(socket)=>{
    console.log("new connection")
})