import { task } from "./task"

// Author:  Mandy Campbell
// Purpose:  all event listeners for tasks, create task, save and delete

import { taskForm } from "./taskForm.js"
import {saveTask, deleteTask} from "./taskDataProvider.js"
import { taskList } from "./taskList.js"

const eventHub = document.querySelector("main")

eventHub.addEventListener("click", eventObject => {
    if(eventObject.target.id === "createTask") {
        taskForm()
    }

    else if (eventObject.target.id === "saveTask") {
        // create a new task/object
        const newTask = {
            userId: sessionStorage.getItem("activeUser"),
            task: document.querySelector("#task").value,
            date: document.querySelector("#date").value,
        }

        saveTask(newTask)
        .then(taskList)

    }

    else if (eventObject.target.id.includes(""))
})