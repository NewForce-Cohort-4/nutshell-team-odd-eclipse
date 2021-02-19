import {LogOutButton} from "./auth/LogoutButton.js"

//Patti imported
import {ArticleList} from "./Articles/ArticleList.js"

// Imported by DTB to generate a list of events once 
// a user is logged in.
import { eventList } from './events/eventList.js'

// Link the events EventHub to activate event listeners
import { } from './events/eventsEventHub.js'

import {TaskList} from "./Tasks/taskList.js"

export const Nutshell = () => {

    LogOutButton()
    // Render all your UI components here

    // Print the list of events to the DOM
    eventList()

    ArticleList()

    TaskList()
    
}