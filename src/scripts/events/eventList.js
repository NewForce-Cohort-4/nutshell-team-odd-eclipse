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

    // Fetch events, cache events locally
    getEvents().then(() => {
        let events = useEvents();
        console.log(new Date())
    
        // Generate HTML using a string-template-literal function to generate an HTML card for each event
        eventTarget.innerHTML = `
            <section>
                <article class="flex-container-col">
                    <div class="event-header flex-container-row">
                        <h2>Upcoming Events</h2>
                        <div class="button-container">
                            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="addEvent">+ Event</button>
                        </div>
                    </div>
                    <div class="event-list flex-container-col">
                        ${events.map(event => eventCard(event)).join("")}
                    </div>
                </article>
            </section>
            `;
    })
}
