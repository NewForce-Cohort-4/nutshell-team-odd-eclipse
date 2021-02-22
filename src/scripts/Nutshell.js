import {LogOutButton} from "./auth/LogoutButton.js"
//Matt imported bottum two for messages
import { messages} from './chat/messageList.js'
import { messageForm } from './chat/messageInput.js'
//Patti imported
import {ArticleList} from "./Articles/ArticleList.js"
import { } from './Articles/ArticleEventHub.js'

// David imported 
import { eventList } from './events/eventList.js'
import { } from './events/eventsEventHub.js'




import {taskList} from "./Tasks/taskList.js"
import {} from "./Tasks/taskDataProvider.js"
import {} from "./Tasks/taskEventHub.js"

export const Nutshell = () => {

    LogOutButton()
    messages()
    messageForm()
    ArticleList()
    eventList()
    taskList()
    

          // Render all your UI components here
}

