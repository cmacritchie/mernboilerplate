const rootSocket = (io) => {
    io.sockets.on('connection', function (socket) {
        console.log("New Client connected")

    })
}

module.exports = rootSocket;