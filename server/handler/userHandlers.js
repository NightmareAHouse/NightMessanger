const users = {}

module.exports = (io, socket) => {
    const getUsers = () => {
        io.in(socket.roomId).emit('users', users);
    }

    const addUser = ({username, userId, aboutMe}) => {
        if (!users[userId]) {
            users[userId] = {username, online: true, aboutUser: aboutMe}
        } else {
            users[userId].online = true
        }

        getUsers();
    }

    const removeUser = (userId) => {
        console.log(users);
        console.log(users[userId]);
        users[userId].online = false
        getUsers();
    }

    socket.on('user:get', getUsers)
    socket.on('user:add', addUser)
    socket.on('user:leave', removeUser)
}