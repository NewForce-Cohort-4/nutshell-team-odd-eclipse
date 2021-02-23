/* 
 * Author: DTB
 * This module serves to manage user engagement via 
 * event listeners
 */

// Import function to save the new event
import { follow, unfollow } from './friendsDataProvider.js'

// Import function to print a list of events to the DOM
// so that once a new event is added, the list can be refreshed.
import { FriendList } from './friendList.js'

// Define the target container for the event listeners
const eventHub = document.querySelector('#friends')

// Add a click-event listener
eventHub.addEventListener("click", eventObject => {

    // If the click occurred on the "Save Event" button, 
    if (eventObject.target.id.includes("follow-friend")) {

        const friendId = eventObject.target.id.split("--")[1]
        // create a new event object
        const newFriend = {
            userId: sessionStorage.getItem("activeUser"),
            followingId: friendId
        }

        // post the new event object to the local API using the
        // imported function "saveEvent".
        // THEN refresh the list of events
        follow(newFriend)
        .then(FriendList)
    } 
    // Else if the click occurred on a "Delete Event" button,
    else if (eventObject.target.id.includes("delete-friend")) {
        // Extract the event ID from the click-target-id, which was
        // was defined to be "delete-event--##" in the event.js module
        let friendID = eventObject.target.id.split("--")[1]
        console.log(friendID)
        // Remove the targeted event object from the local API
        // using the imported function "deleteEvent"
        // THEN refresh the list of events
        unfollow(friendID)
        .then(FriendList)
    } 
})
