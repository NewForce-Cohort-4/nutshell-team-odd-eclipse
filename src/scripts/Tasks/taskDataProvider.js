let tasks = []

export const useTask = () => tasks.slice()



export const getTask = () => {
    const userID = sessionStorage.getItem("activeUser")
    return fetch(`http://localhost:8088/tasks?userId=${userID}`) //fetch call to json server
        .then(response => response.json()) // turn into javascript
        .then(parsedTask => {
            tasks = parsedTask // store variable in notes
        })

}

export const saveTask = task => { //
    return fetch('http://localhost:8088/tasks', {
        method: "POST", // makes a post request - POST means add something 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task) // the thing its going to send is a jsonified note we just built
    })
}

export const moveNote = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            completed: true,
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
}