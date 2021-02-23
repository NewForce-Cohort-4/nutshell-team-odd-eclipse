import { useMessages, getMessages, deleteMessage } from './messageDataProvider.js'
import { message } from './messages.js'
import { useUsers, getUsers } from '../Users/UserDataProvider.js'

//Prints the list of messages 
export const messages = () => {
    const messageList = document.querySelector("#message-list")
    getMessages()
    .then(getUsers)
    .then(() => {
        let messageHTML = ""
        let allMessages = useMessages()
        let allUsers = useUsers()

        if (allMessages.length === 0) {
            eventsHTML += `
            <div class="">
                <h6>No Upcoming Events</h6>
            </div>
            `
        }

        for(let thisMessage of allMessages){
            const userHTML = allUsers.find(userObject => userObject.id === +thisMessage.userId)
           messageHTML += message(thisMessage, userHTML)
        }
        messageList.innerHTML = messageHTML
    })
}

// Delete button action when clicked 
const eventHub = document.querySelector("#message-list")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("deleteMessage--")) {
        const messageToDelete = eventObject.target.id.split("--")[1]
        const currentMessage = useMessages().find((message) => {
            return message.id === parseInt(messageToDelete)
        })
        deleteMessage(currentMessage.id).then(getMessages)
        .then(messages)
    }})