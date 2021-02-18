// Dom printing for messages List
export const message = (messageObject) =>{
    return `
    <section>
    <p>Message: ${messageObject.message}</p>
    <p>User: ${messageObject.userId}</p>
    <button id="deleteNote--${messageObject.id}">Delete</button>
    </section>
    `
}