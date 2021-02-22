/* 
 * Author: DTB
 * This module serves to print a list of the events 
 * included in the local API.
 */

// Import functions that will pull data from the API and cache it locally
import { useEvents, getEvents} from './eventDataProvider.js'
// Import function to generate HTML for each event object
import { eventCard } from './event.js'

// Build function to obtain API event data, generate HTML, and print to the DOM.
export const eventList = () => {
    // Define HTML target location for list of events
    const eventTarget = document.querySelector("#events")


    // Generate HTML using a string-template-literal function to generate an HTML card for each event
    eventTarget.innerHTML = `
        <section>
            <article class="flex-container-col">
                <div class="event-header flex-container-row-even">
                    <h5>Upcoming Events</h5>
                    <div class="button-container">
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="addEvent">+ Event</button>
                    </div>
                </div>
                <div class="scrollable-container-events">
                    <div class="flex-container-col" id="event-list">
                    
                    </div>
                </div>
            </article>
        </section>
        `;
    
    render()
    
}

const render = () => {
    const eventListTarget = document.querySelector("#event-list")
    
    const userID = sessionStorage.getItem("activeUser")

    const borderClass = ["border-primary border-4", "border-secondary"]
    const textClass = ["text-primary", "text-secondary"]

    let eventsHTML = ""

    // Fetch events, cache events locally
    getEvents(userID).then(() => {
        let events = useEvents();

        if (events.length === 0) {
            eventsHTML += `
            <div class="">
                <h6>No Upcoming Events</h6>
            </div>
            `
        } else {
            let month = new Date(+events[0].eventDate).toDateString("en-US").split(" ")[1]

            // let month = "NEW MONTH"
            eventsHTML += `
            <h6>${month} <span class="badge rounded-pill bg-secondary" id="numEvents-${month}">1</span></h6>
            ${eventCard(events[0], borderClass[0], textClass[0])}
            `
            let numEventsInMonth = 0;
            for (let i=1; i<events.length; i++) {
                if (new Date(+events[i].eventDate).toDateString("en-US").split(" ")[1] !== month) {
                    // document.querySelector(`#numEvents-${month}`).innerHTML = numEventsInMonth
                    numEventsInMonth = 0;
                    month = new Date(+events[i].eventDate).toDateString("en-US").split(" ")[1]
                    eventsHTML += `<h6>${month} <span class="badge rounded-pill bg-secondary" id="numEvents-${month}">1</span></h6>`
                }
                
                eventsHTML += eventCard(events[i], borderClass[1], textClass[1])
                numEventsInMonth++
            }            
        }

        eventListTarget.innerHTML = eventsHTML
    })
}


// Old function
/*
export const eventList = () => {
    const userID = sessionStorage.getItem("activeUser")
    // Define HTML target location for list of events
    const eventTarget = document.querySelector("#events")

    const borderClass = ["border-primary border-4", "border-secondary"]
    const textClass = ["text-primary", "text-secondary"]
    
    // Fetch events, cache events locally
    getEvents(userID).then(() => {
        let events = useEvents();
        
        // Generate HTML using a string-template-literal function to generate an HTML card for each event
        eventTarget.innerHTML = `
            <section>
                <article class="flex-container-col">
                    <div class="event-header flex-container-row-even">
                        <h5>Upcoming Events</h5>
                        <div class="button-container">
                            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="addEvent">+ Event</button>
                        </div>
                    </div>
                    <div class="scrollable-container-events">
                        <div class="flex-container-col" id="event-list">
                        ${eventCard(events[0], borderClass[0], textClass[0])}
                        ${events.slice(1,events.length).map(event => eventCard(event, borderClass[1], textClass[1])).join("")}
                        </div>
                    </div>
                </article>
            </section>
            `;
    })
}
*/