import {LogOutButton} from "./auth/LogoutButton.js"
//Imported by PP
//Imported to print a list of articles after a user logs in
import {ArticleList} from "./Articles/ArticleList.js"
//Link the articles eventListeners
import {} from "./Articles/ArticleEventHub.js"
import {} from "./Articles/ArticleDataProvider.js"

// Imported by DTB to generate a list of events once 
// a user is logged in.
import { eventList } from './events/eventList.js'

// Link the events EventHub to activate event listeners
import { } from './events/eventsEventHub.js'

import {TaskList} from "./Tasks/taskList.js"
import {} from "./Tasks/taskDataProvider.js"
import {} from "./Tasks/taskEventHub.js"

export const Nutshell = () => {

    LogOutButton()
    //Print the list of events to the DOM
    ArticleList()
    // Print the list of events to the DOM
    eventList()
      // Render all your UI components here
}

    ArticleList()

    TaskList()
    

