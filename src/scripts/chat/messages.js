// Dom printing for messages List
export const message = (messageObject) =>{
    return `
    <section>
    <h2>Message:</h2>
    <p>${messageObject.message}</p>
    <p>${messageObject.userId}</p>
    <button id="deleteNote--${messageObject.id}">Delete</button>
    </section>
    `
}