

// Author:  Mandy Campbell
// Purpose:  all event listeners for tasks, create task, save and delete

// import { newTaskButton } from "./taskForm.js";
import { saveTask, deleteTask, updateStatus } from "./taskDataProvider.js";
import { task } from "./task.js";

const eventHub = document.querySelector("main");

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id === "createTask") {
    newTaskButton();
  } else if (eventObject.target.id === "saveTask") {
    // create a new task/object

    const newTask = {
      userId: sessionStorage.getItem("activeUser"),
      task: document.querySelector("#task").value,
      date: document.querySelector("#date").value,
      completed: 'no'
    };

    saveTask(newTask).then(TaskList);
  } else if (eventObject.target.id.includes("deleteTask")) {
    let taskId = eventObject.target.id.split("--")[1];
    console.log(eventObject.target.id, taskId);
    deleteTask(taskId).then(TaskList);
  }
});

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("check-complete") ) {
    let status = document.getElementById(clickEvent.target.id).checked;
    let taskId = clickEvent.target.id.split("--").pop();
    updateStatus(taskId, status);
    TaskList();
  }
});

