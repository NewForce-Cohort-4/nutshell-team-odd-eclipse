// Dom printing layout for messages List
export const message = (messageObject, userObject) =>{
    let messageHTML = `
    <section>
    <p>"${messageObject.message}"</p>
    <p>Date: ${messageObject.dateOfMessage}</p>
    <p>User: ${userObject.email}</p>
    </section>`
    // Delete Button appears only for the user who posted the message
        if(messageObject.userId === sessionStorage.getItem("activeUser")){
        messageHTML += `<button id="deleteNote--${messageObject.id}">Delete</button>`
    }    
    return messageHTML
}