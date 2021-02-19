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
        body: JSON.stringify(task)
    }).then(() => {
        listTask()
    })
}

export const updateStatus = (taskId,completed) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`,{
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(
            {
                // changing the status 
              "completed": completed        
            }
        )
    });
}

export const deleteTask = taskId => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
}