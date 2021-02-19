// Author: Mandy Campbell

// Purpose: run fetch call to gather data with get, post, save

let tasks = []
export const useTasks = () => {
    // returns a copy of the tasks array
    return tasks.slice()
}

export const getTasks = () => {
    return fetch (`http://localhost:8088/tasks`)
    .then(response => response.json())
    .then(parsedTasks =>{
        tasks = parsesdTasks
    })
}

export const saveTask = task => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        
    })
}

