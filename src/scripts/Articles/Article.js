//Author: Patti Perry
//Purpose: This module creates an HTML representation of the article that will print to the DOM

//created a function that will build the HTML for each article when it's object is passed in as a parameter
//used bootstrap
export function article (articleObject) {
    return `
    <div class="card">
	    <div class="card-header flex-container-row-even">
		    <h3>${articleObject.title}</h3>
		    <div class="button-container">
			    <button type="button" class="btn btn-danger btn-sm rounded-pill" id="deleteArticle--${articleObject.id}">Delete</button>
		    </div>
	    </div>
	    <div class="card-body">
		    <p>${articleObject.synopsis}</p>
		    <p><a href=${articleObject.url}>${articleObject.url}</a></p>
	    </div>
    </div>
    `
}

            


{/* <div class="article-card">
            <h3>${articleObject.title}</h3>
            <p>Synopsis: ${articleObject.synopsis}</p>
            <p>${articleObject.url}</p>
            <button id="deleteArticle--${articleObject.id}">Delete</button>
        </div> */}