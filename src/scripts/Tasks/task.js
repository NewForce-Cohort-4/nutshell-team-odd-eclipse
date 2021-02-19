// Author:  Mandy Campbell
// Purpose: this module creates an HTML representation of the task list

export function task (taskObject) {
    return `
        <div class="card">
            <div class="card-header flex-container-row-even">
                <h6>${taskObject.task}</h6>
                <div class="button-container">
                    <button type="button" class="btn btn-danger btn-sm rounded-pill" id="deleteTask--${taskObject.id}">Delete</button>
                </div>
            </div>
            <div class="card-body">
                <p>${taskObject.dueDate}</p>
                
            </div>
        </div>
`
}

// need something about completing the task
// <p>${taskObject.}</p>