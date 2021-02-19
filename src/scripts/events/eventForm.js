/* 
 * Author: DTB
 * This module serves to provide a form in a pop-up modal after the "add 
 * event" button is engaged.
 */

export const eventForm = () => {
    
    // Define the HTML target for the form: 
    let popUpTarget = document.querySelector(".modal-content");
    
    // Build HTML structure and content for the form. 
    // Input IDs are used in eventsEventHub.js to build new event objects. 
    // General structure and styling of the following HTML was taken from Bootstrap.
    popUpTarget.innerHTML = ` 
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Create New Event</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
        <fieldset class="flex-container-col">
            <label for="event-date">Date of Event</label>
            <input type="date" name="event-date" id="event-date">
            
            <label for="event-name">Name of Event</label>
            <input type="text" name="event-name" id="event-name">
            
            <label for="event-location">Location</label>
            <input type="text" name="event-location" id="event-location">

            <label for="event-details">Details</label>
            <textarea name="event-details" id="event-details" cols="30" rows="10"></textarea>

            <!-- Record Entry Button -->
            <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" id="save-event">Save</button>
        </fieldset>
        </form>
        </div>
        `
}
