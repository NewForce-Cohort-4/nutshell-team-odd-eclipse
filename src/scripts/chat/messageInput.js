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

