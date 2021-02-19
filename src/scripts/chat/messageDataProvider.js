let messages = ""

export const useMessages = () => {
    const sortByDate = messages.sort(
        (currentMessage, nextMessage) =>
        Date.parse(currentMessage.dateOfMessage) - Date.parse(nextMessage.dateOfMessage)
    )
    return sortByDate
}

//Where chat messages is being pulled from 
export const getMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then(response => response.json())
    .then((messagesFromAPI) => {
        // console.log(messagesFromAPI)
        messages = messagesFromAPI
    })}

    //Save New Note
    export const saveMessage = message => {
        return fetch("http://localhost:8088/messages" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })}

    //Delete button for notes
    export const deleteMessage = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    })}