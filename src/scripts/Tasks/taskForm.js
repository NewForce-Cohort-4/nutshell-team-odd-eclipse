import { saveTask } from './TaskDataProvider.js';
import { TaskList } from './TaskList.js';

const eventHub = document.querySelector("#tasks")

document.querySelector("body").addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "newTaskButton") {
        TaskForm()
    }
})

// the following builds the form - needs an input or property of the note
export const TaskForm = () => {
    const contentTarget = document.querySelector(".taskFormContainer")

    contentTarget.innerHTML = `
    <fieldset class="flex-container-row">
        <button class="btn btn-outline-primary btn-sm" id="saveTask">+</button>
        <input type="text" class="inline-input-text" size="27" placeholder="New task..." id="task-text"> </input>
        <input type="date" id="task-date" style="border-radius: 10px;"></input>
    </fieldset>
    `
}

//all of the following is for when the save button is clicked
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveTask") {
        console.log("you clicked me")

        const newTask = {
            //gets the value or inputs and stores in an object
            date: document.querySelector("#task-date").value,
            task: document.querySelector("#task-text").value,
            completed: false,
            userId: sessionStorage.getItem("activeUser")
        }
        
        saveTask(newTask) //saves the task
        .then(TaskList)
    }
})