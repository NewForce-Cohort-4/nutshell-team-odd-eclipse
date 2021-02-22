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

const render = () => {
    const eventListTarget = document.querySelector("#message-list")
    // const borderClass = ["border-primary border-4", "border-secondary"]
    // const backgroundClass = ["style=background-color:lightgrey", ""]
    // const textClass = ["text-primary", "text-secondary"]
    let messagesHTML = ""

    // Fetch events, cache events locally
    getMessages()
    .then(getUsers)
    .then(() => {
        let allMessages = useMessages()
        let allUsers = useUsers()
        let months = []

        if (events.length === 0) {
            eventsHTML += `
            <div class="">
                <h6>No Upcoming Events</h6>
            </div>
            `
        } else {
            let month = new Date(+events[0].eventDate).toDateString("en-US").split(" ")[1]
            let numEventsInMonth = 1;

            eventsHTML += `
            <h6>${monthNames.find(mon => mon.includes(month))} <span class="badge rounded-pill bg-secondary" id="numEvents-${month}"></span></h6>
            ${eventCard(events[0], borderClass[0], textClass[0], backgroundClass[0])}
            `
            
            for (let i=1; i<events.length; i++) {
                
                if (new Date(+events[i].eventDate).toDateString("en-US").split(" ")[1] !== month) {
                    months.push({monthName: month, numEvents: numEventsInMonth})

                    numEventsInMonth = 0;

                    month = new Date(+events[i].eventDate).toDateString("en-US").split(" ")[1]

                    eventsHTML += `<h6>${monthNames.find(mon => mon.includes(month))} <span class="badge rounded-pill bg-secondary" id="numEvents-${month}"></span></h6>`
                }
                
                eventsHTML += eventCard(events[i], borderClass[1], textClass[1], backgroundClass[1])

                numEventsInMonth++

                if (i === events.length - 1) {
                        months.push({monthName: month, numEvents: numEventsInMonth})
                }
            }            
        }

        eventListTarget.innerHTML = eventsHTML

        months.forEach(month => document.querySelector(`#numEvents-${month.monthName}`).innerHTML = month.numEvents)
    })
}

// Delete button action when clicked 
const eventHub = document.querySelector("#message-list")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("deleteNote--")) {
        const messageToDelete = eventObject.target.id.split("--")[1]
        const currentMessage = useMessages().find((message) => {
            return message.id === parseInt(messageToDelete)
        })
        deleteMessage(currentMessage.id).then(getMessages)
        .then(messages)
    }})