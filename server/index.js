// create http server
const server = require('http').createServer()
//connect server to Socket IO
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})

//get event handler
const registerMessageHandler = require('./handler/messageHandler.js');
const registerUserHandler = require('./handler/userHandlers.js');

const onConnection = (socket) => {
    console.log('User connected');

    const { roomId } = socket.handshake.query;

    socket.roomId = roomId;

    socket.join(roomId);

    registerMessageHandler(io, socket);
    registerUserHandler(io, socket);

    socket.on('disconnect', () => {
        console.log('User Disconnected')

        socket.leave(roomId);
    })
}

io.on('connection', onConnection);

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server run and listen port: ${PORT}`)
})