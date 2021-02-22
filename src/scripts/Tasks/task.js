// Author:  Mandy Campbell
// Purpose: this module creates an HTML representation of the task list

export function task (taskObject) {
    return`
        <div class="card">
        <div class="card-header flex-container-row-even">
        <h3>${taskObject.task}</h3>
        <input class="form-check-input" type="checkbox" value="" id="check-complete--${taskObject.id}">
        <label class="form-check-label" for="flexCheckDefault">
            Mark Completed
        </label>
    
    </div>
    <div class="card-body">
        <p>${taskObject.date}</p>
        
    </div>
</div>
`
}


// need something about completing the task
// <p>${taskObject.}</p>

// ${task.completed == true ? "checked" : 'notcdafc'}