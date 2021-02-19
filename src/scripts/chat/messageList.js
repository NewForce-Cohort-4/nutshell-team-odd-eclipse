import { useMessages, getMessages, deleteMessage } from './messageDataProvider.js'
import { message } from './messages.js'
import { useUsers } from '../Users/UserDataProvider.js'

//Prints the list of messages 
export const messages = () => {
    const messageList = document.querySelector("#message-list")
    getMessages()
    .then(() => {
        let messageHTML = ""
        let allMessages = useMessages()
        let allUsers = useUsers()
        for(let thisMessage of allMessages){
            const userHTML = allUsers.find(userObject => userObject.id === +thisMessage.userId)
           let messageHTML += message(thisMessage, userHTML)
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