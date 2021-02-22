// Dom printing layout for messages List
export const message = (messageObject, userObject) =>{
    let button = "";
    let alignment = "style='text-align: left;'";
    let bckgrndColor = "style='background-color: lightblue;'"
    // Delete Button appears only for the user who posted the message
    // Alignment based on user
    if (messageObject.userId === sessionStorage.getItem("activeUser")) {
        button = `<button type="button" class="btn-close" id="deleteMessage--${messageObject.id}"></button>`
        alignment = "style='text-align: right;'";
        bckgrndColor = "style='background-color: lightgreen;'"
    }  

    let messageHTML = `
    <div class="row date-subdued" style="text-align: center;">${messageObject.dateOfMessage}</div>
    <div class="row message-row" ${bckgrndColor}>
        <div class="message-container col-sm-8">
            <p class="message" ${alignment}><strong>${userObject.email.split("@",1)}</strong>: ${messageObject.message}</p>
        </div>
        <div class="button-container col-sm 3">
            ${button}
        </div>
    </div>
    `
            
    return messageHTML
}

