// Author:  Mandy Campbell
// Purpose: build the task form with buttons and eventlisteners

export const newTaskButton = () => {

    // html container for form
    let contentTarget = document.querySelector('#tasks')

    contentTarget.innerHTML = `  <div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel">Create New Task</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    </div>

    <div class="modal-body">
    <form>
        <fieldset class="flex-container-col">
              
            <label for="title">New Task</label>
            <input type="text" name="task" id="task">
            
            <label for="completion Date">Date to Complete</label>
            <input type="text" name="date-to-complete" id="date">
            
            <!-- Save Task Button -->
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="saveTask">Save</button>
        </fieldset>
    </form>
</div>
`
}
    
