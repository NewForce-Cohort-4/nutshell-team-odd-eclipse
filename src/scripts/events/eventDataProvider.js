/* 
 * Author: DTB
 * This module serves to retrieve all of the event data from the 
 * database.json API.
 */

// Initiate variable
let events = []

// Define the url for the local API
const eventsAPIurl = "http://localhost:8088/events"

// Build a function to deliver a copy of the cached event data
export const useEvents = () => {
    const sortedByDate = events.sort(
        (currentEvent, nextEvent) =>
            currentEvent.eventDate - nextEvent.eventDate
    )

    const upcomingEvents = sortedByDate.filter(event => {
        return event.eventDate >= Date.now()
    })
    // console.log(upcomingEvents)
    return upcomingEvents
}

// Build a function to fetch events data from the local API 
// and cache it in the locally scoped variable "events"
export const getEvents = () => {
    const userID = sessionStorage.getItem("activeUser")

    return fetch(eventsAPIurl + `?userId=${userID}`)
        .then(response => response.json())
        .then(
            parsedEvents => {
                events = parsedEvents
            }
        )
}

// Build a function to post new, user generated events to 
// the local API
export const saveEvent = newEvent => {
    
    return fetch(eventsAPIurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })
}

// Build a function to delete events from the local API
export const deleteEvent = eventID => {
    
    return fetch(eventsAPIurl + `/${eventID}`, {
        method: "DELETE",
    })
}