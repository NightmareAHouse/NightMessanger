import {useEffect, useRef, useState} from 'react'
import io from 'socket.io-client'
import {nanoid} from 'nanoid'
import {useLocalStorage} from './useLocalStorage'
import {API_URL} from "../app/Config";

const SERVER_URL = API_URL

export const useChat = (roomId) => {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    const [chatName, setChatName] = useState([])
    const [userId] = useLocalStorage('userId', nanoid(8))
    const [username] = useLocalStorage('username')
    const [aboutMe] = useLocalStorage('aboutMe')

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(SERVER_URL, {
            query: {roomId}
        })

        socketRef.current.emit('user:add', {username, userId, aboutMe})

        socketRef.current.on('users', (users) => {
            setUsers(users)
        })

        socketRef.current.emit('chat:get')

        socketRef.current.on("chatName", (chatName) => {
            setChatName(chatName);
        })

        socketRef.current.emit('message:get')

        socketRef.current.on('messages', (messages) => {
            const newMessages = messages.map((msg) =>
                msg.userId === userId ? {...msg, currentUser: true} : msg
            )
            setMessages(newMessages)
        })

        window.addEventListener("beforeunload", () => {
            console.log('unload')
            socketRef.current.emit('user:leave', userId)
        })

        return () => {
            window.removeEventListener('beforeunload', socketRef.current.emit('user:leave', userId))
            socketRef.current.disconnect()
        }
    }, [roomId, userId, username, aboutMe])

    const sendMessage = ({messageText, senderName}) => {
        socketRef.current.emit('message:add', {
            userId,
            messageText,
            senderName
        })
    }

    const changeChatName = (chatName) => {
        socketRef.current.emit('chat:rename', chatName)
    }

    const userRename = (username, userId, aboutMe) => {
        socketRef.current.emit('user:rename', {username, userId, aboutMe})
    }

    const removeMessage = (id) => {
        socketRef.current.emit('message:remove', id)
    }

    const clearChatMessages = () => {
        socketRef.current.emit('chat:clearChatMessages');
    }

    return {users, messages, chatName, changeChatName, clearChatMessages, userRename, sendMessage, removeMessage}
}