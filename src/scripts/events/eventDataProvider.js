/* 
 * This module serves to retrieve all of the event data from the 
 * database.json API.
 */

let events = []

const eventsAPIurl = "http://localhost:8088/events"

export const useEvents = () => {
    return events.slice()
}

export const getEvents = () => {
    
    return fetch(eventsAPIurl)
        .then(response => response.json())
        .then(
            parsedEvents => {
                events = parsedEvents
            }
        )
}

export const saveEvent = newEvent => {
    
    return fetch(eventsAPIurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })
}

export const deleteEvent = eventID => {
    
    return fetch(eventsAPIurl + `/${eventID}`, {
        method: "DELETE",
    })
}