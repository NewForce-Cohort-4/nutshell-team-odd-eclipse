/* 
 * This module serves to provide a form in a pop-up modal after the "add * event" button is engaged.
 */
import { useEvents, getEvents} from './eventDataProvider.js'
import { eventCard } from './event.js'

export const eventList = () => {
    const eventTarget = document.querySelector("#events")

    getEvents().then(() => {
        let events = useEvents();
    
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
