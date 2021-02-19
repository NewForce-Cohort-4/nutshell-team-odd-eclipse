// Author:  Mandy Campbell
// Purpose: build the task form with buttons and eventlisteners

import { saveTask, updateStatus } from "./taskDataProvider.js"
import { listTask } from "./taskList.js"

export const newTaskButton = () => {
    let contentTarget = document.querySelector('#tasks')
    contentTarget.innerHTML = `  <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" id="save-event">Save</button>

    `
}