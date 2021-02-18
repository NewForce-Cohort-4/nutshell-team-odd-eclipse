// Dom printing for messages List
export const message = (messageObject) =>{
    let messageHTML = `
    <section>
    <p>Message: ${messageObject.message}</p>
    <p>Date: ${messageObject.dateOfMessage}</p>
    <p>User: ${messageObject.userId}</p>
    </section>`
    // Delete Button appears only for the user who posted 
        if(messageObject.userId === sessionStorage.getItem("activeUser")){
        messageHTML += `<button id="deleteNote--${messageObject.id}">Delete</button>`
    }    
    return messageHTML
}