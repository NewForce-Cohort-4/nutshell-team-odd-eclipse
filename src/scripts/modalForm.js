export const form = (stuff) => {
    
    let popUpTarget = document.querySelector(".modal-content"); 
    let formPopUpHTML = ""

    // getCriminals().then(() => {
        
        formPopUpHTML += ` 
            <form>
            <fieldset class="flex-container-column">
                <label for=""></label>
                <input type="date" name="" id="">
                
                <label for=""></label>
                <select class="dropdown" name="" id="">
                    
                </select>

                <label for=""></label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
    
                <!-- Record Entry Button -->
                <button id="save">Save</button>
            </fieldset>
        </form>
            `

        popUpTarget.innerHTML = formPopUpHTML

        return popUpTarget.innerHTML
    // })
}
