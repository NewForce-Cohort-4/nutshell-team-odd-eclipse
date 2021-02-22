/* 
 * DTB
 * This module serves to provide HTML for each event object
 * from the local API.
 */

// Build function to build an HTML event card given an event object
export const eventCard = (eventData, borderClass, textClass) => {
    
    return `
    <div class="card ${borderClass}">
        <div class="card-header flex-container-row-even">
            <h6>${eventData.eventName}</h6>
            <div class="button-container">
                <button type="button" class="btn btn-danger btn-sm rounded-pill" id="delete-event--${eventData.id}">Delete</button>
            </div>
        </div>
        <div class="card-body ${textClass}">
            <p>${new Date(+eventData.eventDate).toDateString()}</p>
            <p><strong>Location:</strong> ${eventData.eventLocation}</p>
            <p>${eventData.eventDetails}</p>
        </div>
    </div>
    `
}