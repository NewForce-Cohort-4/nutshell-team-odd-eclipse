//Author: Patti Perry
//Purpose: This module creates a form where the user can enter in information about an articel(title, synopsis, url), click a save button-invoke the save function, a time stamp will be applied, click a delete button-invoke detele function 

export const articleForm = () => {
    
    //html container for the form
    let contentTarget = document.querySelector(".modal-content");
    
    //used bootstrap to create the structure and style for the HTML of this form
    //the form will pop up when the create article button is clicked(on ArticleEventHub.js)
    contentTarget.innerHTML = ` 
        <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Create New Article</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <form>
                    <fieldset class="flex-container-col">
                          
                        <label for="title">Title of Article</label>
                        <input type="text" name="title" id="title">
                        
                        <label for="synopsis">Synopsis</label>
                        <input type="text" name="synopsis" id="synopsis">

                        <label for="url">URL</label>
                        <input type="hyperlink" name="url" id="url">

                        <!-- Save Article Button -->
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="saveArticle">Save</button>

                    </fieldset>
                </form>
        </div>
        `
}
