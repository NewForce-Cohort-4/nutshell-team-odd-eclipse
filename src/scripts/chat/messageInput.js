import { saveMessage, getMessages } from './messageDataProvider.js'
import { messages } from './messageList.js'

export const messageForm = () => {
    const composeMessage = document.querySelector("#messages")
    composeMessage.innerHTML = `
    <input type="date" id="date-text">
    <input type="text" placeholder="Type Message Here..." id="note-text">
    
    <button id="postMessage">Post Message</button>
    `
}

const eventHub = document.querySelector("#messages")
eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "postMessage") {
        console.log("you clicked me")

        let message = document.querySelector("#note-text")
        let dateOfMessage = document.querySelector("#date-text")
        let user = sessionStorage.getItem("activeUser")

        const newMessage = {
            message: message.value,
            userId: user,
            dateOfMessage: dateOfMessage.value,
        }
        console.log(newMessage)
        console.log(sessionStorage.getItem("activeUser"))
        saveMessage(newMessage)
        .then(getMessages)
    }

})