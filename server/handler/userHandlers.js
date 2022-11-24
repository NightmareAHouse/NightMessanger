const users = {
    1: {username: "Test Testovich", online: true},
    2: {username: "Viktor Testovich", online: false}
}

module.exports = (io, socket) => {
    const getUsers = () => {
        io.in(socket.roomId).emit('users', users);
    }

    const addUser = ({username, userId}) => {
        if (!users[userId]) {
            users[userId] = {username, online: true}
        } else {
            users[userId].online = true
        }

        getUsers();
    }

    const removeUser = (userId) => {
        console.log(users[userId]);
        if (users[userId].online !== undefined) {
            users[userId].online = false
            getUsers();
        }
    }

    socket.on('user:get', getUsers)
    socket.on('user:add', addUser)
    socket.on('user:leave', removeUser)
}