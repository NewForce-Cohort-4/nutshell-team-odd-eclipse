import {LogOutButton} from "./auth/LogoutButton.js"

// Imported by DTB to generate a list of events once 
// a user is logged in.
import { eventList } from './events/eventList.js'

// Link the events EventHub to activate event listeners
import { } from './events/eventsEventHub.js'

export const Nutshell = () => {

    LogOutButton()
    
    // Print the list of events to the DOM
    eventList()
      // Render all your UI components here
}

//Patti imported
import {ArticleList} from "./Articles/ArticleList.js"
ArticleList()