import { task } from "./task.js"

// Author:  Mandy Campbell
// Purpose:  all event listeners for tasks, create task, save and delete

import { newTaskButton } from "./taskForm.js"
import {saveTask, deleteTask} from "./taskDataProvider.js"
import { TaskList } from "./taskList.js"

const eventHub = document.querySelector("main")

eventHub.addEventListener("click", eventObject => {
    if(eventObject.target.id === "createTask") {
        newTaskButton()
    }

    else if (eventObject.target.id === "saveTask") {
        // create a new task/object
        const newTask = {
            userId: sessionStorage.getItem("activeUser"),
            task: document.querySelector("#task").value,
            date: document.querySelector("#date").value,
        }

        saveTask(newTask)
        .then(TaskList)

    }

    else if (eventObject.target.id.includes("deleteTask")){
        let taskId = eventObject.target.id.split("--")[1]
        console.log(eventObject.target.id, taskId)
        deleteTask(taskId)
        .then(TaskList)
    }
})