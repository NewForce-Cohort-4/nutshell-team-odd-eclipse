/* 
 * This module serves to provide a form in a pop-up modal after the "add * event" button is engaged.
 */

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