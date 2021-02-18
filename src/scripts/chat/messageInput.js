import { useMessages, getMessages, deleteMessage } from './messageDataProvider.js'

const composeMessage = document.querySelector("#messages")
const messageList = document.querySelector("#message-list")

export const messages = () => {
    getMessages()
    .then(() => {
        let messageHTML = ""
        let allMessages = useMessages()
        for(let thisMessage of allMessages){
            messageHTML += message(thisMessage)
        }
        messageList.innerHTML = messageHTML
    })}