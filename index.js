const express = require('express');
const path = require('path'); 
const socketIo = require('socket.io')
const app = express();

app.use('/', express.static(path.join(__dirname,"public")))

const server = app.listen(8080,()=>{console.log("Server Run port:8080")})

const io = socketIo(server)

io.on('connection',(socket)=>{

    console.log("new connection")

    socket.emit('hello',{msg:"Seja bem vindo ao socket.io"})

    socket.on('hello_client_response',(data)=>{
        console.log(data.msg)
    })
})