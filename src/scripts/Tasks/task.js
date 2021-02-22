export const Task = (taskNote) => {
    return `
        <div class = "task-card col">
            <div class="flex-container-row-even">
                <div class="checkbox-container flex-container-row">
                    <input type="checkbox" id="completeNote--${taskNote.id}">
                    <p style="padding-left: 0.5em; padding-right: 0.5em;">${taskNote.task}</p>
                </div>
                <p class="date-subdued" style="align-content:right;" >${taskNote.date}</p>
            </div>
        </div>
    `
}