import { task } from "./task.js"
import { getTasks, useTasks } from './taskDataProvider.js'
import { newTaskButton } from "./taskForm.js"

export const taskList = (currentState) => {
  let activeUser = sessionStorage.getItem('activeUser')
  getTasks()
  .then(() => {
    const tasks = useTasks()
    let done = 0

    for(let i= 0; i<tasks.length; i++){
      if(tasks[i].completed === true) {
        done++;
      }
    }
  })
}
    const filteredTasks = allTasks.filter((singleTask) => {
      return singleTask.userId === sessionStorage.getItem("activeUser");
    });
    // console.log(filteredTasks);

    for (let currentTask of filteredTasks) {
      taskHTMLString += task(currentTask);
    }

    taskContainer.innerHTML = `
      <section>
        <article class="flex-container-col">
          <div class="event-header flex-container-row-even">
            <h5>Current Task</h5>
            <div class="button-container">
              <button type="button" class="btn btn-primary btn-sm" id="createTask">Create Task</button>
            </div>
          </div>
          <div>
            ${taskHTMLString}
          </div>
        </article>
      </section>
      `;
 
