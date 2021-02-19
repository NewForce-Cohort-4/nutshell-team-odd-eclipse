/* 
 * DTB
 * This module serves to provide HTML for each event object
 * from the local API.
 */

// Build function to build an HTML event card given an event object
export const eventCard = (eventData, borderClass, textClass) => {
    console.log(eventData.eventDate)
    console.log(Date(eventData.eventDate).split(" ",4).join(" "))
    return `
    <div class="card ${borderClass}">
        <div class="card-header flex-container-row-even">
            <h6>${eventData.eventName}</h6>
            <div class="button-container">
                <button type="button" class="btn btn-danger btn-sm rounded-pill" id="delete-event--${eventData.id}">Delete</button>
            </div>
        </div>
        <div class="card-body ${textClass}">
            <p>${Date(eventData.eventDate).split(" ",4).join(" ")}</p>
            <p><strong>Location:</strong>${eventData.eventLocation}</p>
            <p>${eventData.eventDetails}</p>
        </div>
    </div>
    `
}