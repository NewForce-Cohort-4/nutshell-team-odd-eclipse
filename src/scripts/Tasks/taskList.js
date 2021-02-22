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