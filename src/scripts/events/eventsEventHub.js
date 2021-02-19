/* 
 * Author: DTB
 * This module serves to manage user engagement via 
 * event listeners
 */

// Import function to print the new event form once the 
// add event button is clicked.
import { eventForm } from './eventForm.js'

// Import function to save the new event
import { saveEvent, deleteEvent } from './eventDataProvider.js'

// Import function to print a list of events to the DOM
// so that once a new event is added, the list can be refreshed.
import { eventList } from './eventList.js'

// Define the target container for the event listeners
const eventHub = document.querySelector('main')

// Add a click-event listener
eventHub.addEventListener("click", eventObject => {

    // If the click occurred on the "Save Event" button, 
    if (eventObject.target.id === "save-event") {
        // create a new event object
        const newEvent = {
            userId: sessionStorage.getItem("activeUser"),
            eventName: document.getElementById("event-name").value,
            eventDate: Date.parse(document.getElementById("event-date").value),
            eventLocation: document.getElementById("event-location").value,
            eventDetails: document.getElementById("event-details").value
        }

        // post the new event object to the local API using the
        // imported function "saveEvent".
        // THEN refresh the list of events
        saveEvent(newEvent)
        .then(eventList)
    } 
    // Else if the click occurred on the "Add Event" button,
    else if (eventObject.target.id === "addEvent") {

        // print the new event form to the modal
        eventForm()
    } 
    // Else if the click occurred on a "Delete Event" button,
    else if (eventObject.target.id.includes("delete-event")) {
        // Extract the event ID from the click-target-id, which was
        // was defined to be "delete-event--##" in the event.js module
        let eventID = eventObject.target.id.split("--")[1]

        // Remove the targeted event object from the local API
        // using the imported function "deleteEvent"
        // THEN refresh the list of events
        deleteEvent(eventID)
        .then(eventList)
    } 
})
