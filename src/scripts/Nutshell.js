import {LogOutButton} from "./auth/LogoutButton.js"
//Matt imported bottum two for messages
import { messages} from './chat/messageList.js'
import { messageForm } from './chat/messageInput.js'
//Patti imported
import {ArticleList} from "./Articles/ArticleList.js"
import { eventList } from './events/eventList.js'




import {TaskList} from "./Tasks/taskList.js"
import {} from "./Tasks/taskDataProvider.js"
import {} from "./Tasks/taskEventHub.js"

export const Nutshell = () => {

    LogOutButton()
    messages()
    messageForm()
    ArticleList()
    eventList()
    TaskList()
    

          // Render all your UI components here
}

