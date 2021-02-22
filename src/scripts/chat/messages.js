// Dom printing layout for messages List
export const message = (messageObject, userObject) =>{
    let messageHTML = `
    <section id="message-list">
    <p>"${messageObject.message}"</p>
    <p>Date / Time: ${messageObject.dateOfMessage}</p>
    <p>User: ${userObject.email}</p>
    </section>`
    // Delete Button appears only for the user who posted the message
        if(messageObject.userId === sessionStorage.getItem("activeUser")){
        messageHTML += `<button type="button" class="btn btn-danger btn-sm rounded-pill" id="deleteNote--${messageObject.id}">Delete</button>`
    }    
    return messageHTML
}