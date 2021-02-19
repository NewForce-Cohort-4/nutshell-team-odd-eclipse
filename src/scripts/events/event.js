/* 
 * DTB
 * This module serves to provide HTML for each event object
 * from the local API.
 */

// Build function to build an HTML event card given an event object
export const eventCard = (eventData) => {
    return `
    <div class="event--card card">
        <div class="card-header flex-container-row-even">
            <h5>${eventData.eventName}</h5>
            <div class="button-container">
                <button type="button" class="btn btn-danger btn-sm rounded-pill" id="delete-event--${eventData.id}">Delete</button>
            </div>
        </div>
        <div class="card-body">
            <p>${eventData.eventDate}</p>
            <p>${eventData.eventLocation}</p>
            <p>${eventData.eventDetails}</p>
        </div>
    </div>
    `
}

// Build function to build an HTML event card for the next upcoming
// event object and add a styling class to highlight significance
export const eventCardPriority = (eventData) => {
    return `
    <div class="card text-white bg-secondary">
        <div class="card-header flex-container-row-even">
            <h5>${eventData.eventName}</h5>
            <div class="button-container">
                <button type="button" class="btn btn-danger btn-sm rounded-pill" id="delete-event--${eventData.id}">Delete</button>
            </div>
        </div>
        <div class="card-body">
            <p>${eventData.eventDate}</p>
            <p>${eventData.eventLocation}</p>
            <p>${eventData.eventDetails}</p>
        </div>
    </div>
    `
}