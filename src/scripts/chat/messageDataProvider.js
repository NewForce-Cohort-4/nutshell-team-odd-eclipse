let messages = ""

export const useMessages = () => messages.slice()

//Where chat messages is being pulled from 
export const getMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then(response => response.json())
    .then((messagesFromAPI) => {
        console.log(messagesFromAPI)
        messages = messagesFromAPI
    })}

    //Delete button for notes
    export const deleteMessage = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    })}