export const Task = (taskNote) => {
    return `
        <div class = "task-card">
            <p>Task: ${taskNote.task}</p>
            <p>Date: ${taskNote.date}</p>
            <div class = "checkbox"
            <h5>Check Completed</h5>
            <p><input type="checkbox" id="completeNote--${taskNote.id}"></p>
            
            </div>
        </div>
    `
    
}

