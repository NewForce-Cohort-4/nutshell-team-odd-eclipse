import {LogOutButton} from "./auth/LogoutButton.js"
//Matt imported bottum two for messages
import { messages} from './chat/messageList.js'
import { messageForm } from './chat/messageInput.js'
//Patti imported
import {ArticleList} from "./Articles/ArticleList.js"




export const Nutshell = () => {

    LogOutButton()
    messages()
    messageForm()
    ArticleList()

          // Render all your UI components here
}

