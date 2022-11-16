const {nanoid} = require('nanoid');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db/message.json')
const db = low(adapter);

db.defaults({
    messages: [
        {
            messageId: '1',
            userId: '1',
            senderName: 'Test Testovich',
            messageText: 'Hi!',
            createdAt: '2021-01-14'
        },
        {
            messageId: '2',
            userId: '1',
            senderName: 'Test Testovich',
            messageText: "How are you?",
            createdAt: '2021-01-14'
        }
    ]
}).write();

module.exports = (io, socket) => {
    const getMessages = () => {
        const messages = db.get('messages').values();

        io.in(socket.roomId).emit('messages', messages)
    }

    const addMessage = (message) => {
        console.log(message);
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

    socket.on('message:get', getMessages)
    socket.on('message:add', addMessage)
    socket.on('message:remove', removeMessage)
}