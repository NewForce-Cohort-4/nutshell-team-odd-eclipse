export const Task = (taskNote) => {
    return `
        <div class = "task-card col">
            <div class="flex-container-row-even checkbox-container">
                <input type="checkbox" style="width: 10%;" id="completeNote--${taskNote.id}">
                <p style="align-text: left; width: 60%; margin-bottom: 0;">${taskNote.task}</p>
                <p class="subdued" style="align-text: right; width: 25%;">${taskNote.date}</p>
            </div>
        </div>
    `
}