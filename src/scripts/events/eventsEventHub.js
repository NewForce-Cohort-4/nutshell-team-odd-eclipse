import { eventForm } from './eventForm.js'
import { saveEvent, deleteEvent } from './eventDataProvider.js'
import { eventList } from './eventList.js'

const eventHub = document.querySelector('main')

// const saveButtonTarget = document.querySelector('#save-itinerary-container')

eventHub.addEventListener("click", eventObject => {
    console.log(eventObject.target.id)
    if (eventObject.target.id === "save-event") {
        const newEvent = {
            userId: 1,
            eventName: document.getElementById("event-name").value,
            eventDate: document.getElementById("event-date").value,
            eventLocation: document.getElementById("event-location").value,
            eventDetails: document.getElementById("event-details").value
        }
        saveEvent(newEvent)
        .then(eventList)
    } else if (eventObject.target.id.includes("delete-event")) {
        let itineraryID = eventObject.target.id.split("--")[1]
        deleteItinerary(itineraryID)
        .then(itineraryList)
    } else if (eventObject.target.id === "addEvent") {
        console.log(eventObject.target.id)
        eventForm()
        
    } 
})
