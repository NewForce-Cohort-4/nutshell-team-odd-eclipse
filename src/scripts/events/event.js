/* 
 * DTB
 * This module serves to provide HTML for each event object
 * from the local API.
 */

// Build function to build an HTML event card given an event object
export const eventCard = (eventData) => {
    return `
    <div class="event--card card">
        <h3>${eventData.eventName}</h3>
        <p>${eventData.eventDate}</p>
        <p>${eventData.eventLocation}</p>
        <p>${eventData.eventDetails}</p>
    </div>
    `
}