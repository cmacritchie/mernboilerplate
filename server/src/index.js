const express = require('express')
const http = require('http')
const socketIo = require("socket.io")

//database
require('./db/mongoose')

//websocket
const rootSocket = require('./websocket/rootSocket')

//routes
const userRouter = require('./routes/userRouter')

//setup
const app = express()

app.use(express.json())
app.use(userRouter)

const port = process.env.PORT || 5000
const server = http.createServer(app)
const io = socketIo(server)
rootSocket(io)


server.listen(port, () => {
    console.log('Server with websocket is up on port ' + port) 
})