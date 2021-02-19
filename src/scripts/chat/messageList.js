import { useMessages, getMessages, deleteMessage } from './messageDataProvider.js'
import { message } from './messages.js'

//Prints the list of messages 
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
            const messageToDelete = eventObject.target.id.split("--")[1]
            console.log(messageToDelete)
            const currentMessage = useMessages().find((message) => {
                return message.id === parseInt(messageToDelete)
            })
            console.log(currentMessage)
            deleteMessage(currentMessage.id).then(getMessages)
            .then(messages)
        }})