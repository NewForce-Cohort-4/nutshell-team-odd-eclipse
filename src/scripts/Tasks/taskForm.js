// Author:  Mandy Campbell
// Purpose: build the task form with buttons and eventlisteners

export const newTaskButton = () => {

    // html container for form
    let contentTarget = document.querySelector('#tasks')

    contentTarget.innerHTML = ` 
    <section class="task-form-container> 
        <div class="task-form-header">
            <h5 class="modal-title" id="staticBackdropLabel">Create New Task</h5>
            <button type="button" class="btn-close" aria-label="Close"></button>

        </div>

        <div class="task-form">
            <form>
                <fieldset class="flex-container-col">
                    
                    <label for="title">New Task</label>
                    <input type="text" name="task" id="task">
                    
                    <label for="completion Date">Date to Complete</label>
                    <input type="date" name="date-to-complete" id="date">
                    
                    <!-- Save Task Button -->
                    <button type="button" class="btn btn-secondary" id="saveTask">Save</button>
                </fieldset>
            </form>
        </div>
    </section>
`
}
    
