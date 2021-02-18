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
        messageList.innerHTML = messageHTML
    })}

    // Delete button action when clicked 
    const eventHub = document.querySelector("#message-list")
    eventHub.addEventListener("click", (eventObject) => {
        if(eventObject.target.id.startsWith("deleteNote--")) {
            console.log("You Clicked me!")
        }})