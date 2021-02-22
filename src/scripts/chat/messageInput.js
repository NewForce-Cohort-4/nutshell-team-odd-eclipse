import { saveMessage } from './messageDataProvider.js'
import { messages } from './messageList.js'

//Form to fill out for new message
export const messageForm = () => {
    const composeMessage = document.querySelector("#message-form")
    composeMessage.innerHTML = `
    <h5>New Message</h5>
    <input type="text" placeholder="Type Here..." id="note-text">
    
    <button id="postMessage">Save Message</button>
    `
}

// Listening event for saving a new message 
const eventHub = document.querySelector("#messages")
eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "postMessage") {

        let message = document.querySelector("#note-text")
        let dateOfMessage = `${new Date().toLocaleDateString('en-US')} | ${new Date().toTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}`
        let user = sessionStorage.getItem("activeUser")

        const newMessage = {
            message: message.value,
            userId: user,
            dateOfMessage: dateOfMessage,
        }
        saveMessage(newMessage)
        .then(() => {
            messages()
         document.querySelector("#note-text").value = ""        
        })
    }})