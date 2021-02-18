//Author: Patti Perry
//Purpose: This module creates an HTML representation of the article that will print to the DOM


export function Article (articleObject) {
    return `
        <section class="criminal-card">
            <p>${articleObject.title}</p>
            <p>Synopsis: ${articleObject.synopsis}</p>
            <p>${articleObject.url}</p>
            <button id="saveArticle--${articleObject.id}">Save</button>
            <button id="deleteArticle--${articleObject.id}">Delete</button>
        </section>
    `
}