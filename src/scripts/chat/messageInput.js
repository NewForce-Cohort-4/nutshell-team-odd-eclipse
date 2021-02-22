import { saveMessage } from './messageDataProvider.js'
import { messages } from './messageList.js'

//Form to fill out for new message
export const messageForm = () => {
    const composeMessage = document.querySelector("#message-form")
    composeMessage.innerHTML = `
    <div class="messages-header">
        <h5>Messages</h5>
    </div>
    <div class="new-message-form flex-container-row-even">
        <input type="text" placeholder="Type Here..." id="message-text">
        <div class="button-container">
            <button type="submit" class="btn btn-primary btn-sm" id="postMessage">Send</button>
        </div>
    </div>
    `
}

// Listening event for saving a new message 
const eventHub = document.querySelector("#messages")
eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "postMessage") {

        let message = document.querySelector("#message-text")
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
         document.querySelector("#message-text").value = ""        
        })
    }})