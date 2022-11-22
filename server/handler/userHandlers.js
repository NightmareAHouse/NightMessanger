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

        console.log(username);
        if(users[userId].username !== username && users[userId].username === undefined) {
            users[userId].username = username;
        }

        console.log(users);

        getUsers();
    }

    const removeUser = (userId) => {
        users[userId].online = false
        getUsers();
    }

    socket.on('user:get', getUsers)
    socket.on('user:add', addUser)
    socket.on('user:leave', removeUser)
}