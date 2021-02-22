import { useTasks, getTasks } from "./taskDataProvider.js";
import { task } from "./task.js";

export const TaskList = () => {
  getTasks().then(() => {
    const allTasks = useTasks();
    // console.log(allTasks);
    const taskContainer = document.querySelector("#tasks");
    let taskHTMLString = "";

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
  });
};
