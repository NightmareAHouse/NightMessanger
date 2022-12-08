const {nanoid} = require('nanoid');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db/message.json')
const db = low(adapter);

db.defaults({
    messages: [],
    chatName: {name: "Group Chat"}
}).write();

module.exports = (io, socket) => {
    const getMessages = () => {
        const messages = db.get('messages').values();

        io.in(socket.roomId).emit('messages', messages)
    }

    const getChatName = () => {
        const chatName = db.get('chatName').values();

        io.in(socket.roomId).emit('chatName', chatName)
    }

    const renameChatName = (test) => {
        db.get('chatName')
            .assign({name: test})
            .write()

        getChatName();
    }

    const addMessage = (message) => {
        db.get('messages')
            .push({
                messageId: nanoid(8),
                ...message
            }).write()

        getMessages()
    }

    const removeMessage = (messageId) => {
        db.get('messages').remove({messageId}).write()

        getMessages();
    }

    const clearChatMessages = () => {
        db.get('messages').remove().write([]);

        getMessages();
    }

    socket.on('message:get', getMessages)
    socket.on('message:add', addMessage)
    socket.on('message:remove', removeMessage)
    socket.on('chat:get', getChatName)
    socket.on('chat:rename', renameChatName)
    socket.on('chat:clearChatMessages', clearChatMessages)
}