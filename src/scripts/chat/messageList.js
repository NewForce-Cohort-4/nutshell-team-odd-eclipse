import { useMessages, getMessages, deleteMessage } from './messageDataProvider.js'
import { message } from './messages.js'

export const messages = () => {
    const messageList = document.querySelector("#message-list")
    getMessages()
    .then(() => {
        let messageHTML = ""
        let allMessages = useMessages()
        for(let thisMessage of allMessages){
            messageHTML += message(thisMessage)
        }
        console.log(messageHTML)
        messageList.innerHTML = messageHTML
    })}