const users = {}

module.exports = (io, socket) => {
    const getUsers = () => {
        io.in(socket.roomId).emit('users', users);
    }

    const addUser = ({username, userId, aboutMe}) => {
        if (!users[userId]) {
            users[userId] = {username, online: true, aboutUser: aboutMe, currentUser: false}
        } else {
            users[userId].online = true
        }

        getUsers();
    }

    const renameUser = ({username, userId, aboutMe}) => {
        users[userId] = {username, online: true, aboutUser: aboutMe}

        getUsers();
    }

    const removeUser = (userId) => {
        users[userId].online = false
        getUsers();
    }

    socket.on('user:get', getUsers)
    socket.on('user:add', addUser)
    socket.on('user:rename', renameUser)
    socket.on('user:leave', removeUser)
}