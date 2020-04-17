const express=require('express')
const http=require('http')
const socketio=require('socket.io')



const app=express()
const port=process.env.PORT || 8080


const server=http.createServer(app)

const io=socketio(server)





io.on('connection', (socket) => {  



    socket.on("send_msg",(val,callback)=>{

      
         io.emit("msg",val)

         callback('deliverde')
 })

    }) 

server.listen(port)