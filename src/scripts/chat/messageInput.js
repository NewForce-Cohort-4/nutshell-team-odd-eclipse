import { saveMessage, getMessages } from './messageDataProvider.js'

//Form to fill out for new message
export const messageForm = () => {
    const composeMessage = document.querySelector("#messages")
    composeMessage.innerHTML = `
    <h2>New Message</h2>
    <input type="date" id="date-text">
    <input type="text" placeholder="Type Here..." id="note-text">
    
    <button id="postMessage">Save Message</button>
    `
}

// Listening event for saving a new message 
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
        saveMessage(newMessage)
        .then(getMessages)
    }})