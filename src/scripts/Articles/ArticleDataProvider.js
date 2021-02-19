//Author: Patti Perry
//Purpose: This module uses fetch calls and gathers all the data needed to support the functions of getArticles, saveArticles, deleteArticles

let articles = []

//sort the articles by date
export const useArticles = () => {
    const sortedByDate = articles.sort(
        (currentArticle, nextArticle) =>
            Date.parse(currentArticle.timeStamp) - Date.parse(nextArticle.timeStamp)
    )
    return sortedByDate
}
//articles.slice()

//pulling data for getArticles from the local json server, converting the data, passing it back into the array articles
export const getArticles = () => {
    return fetch(`http://localhost:8088/articles`)
    .then(response => response.json())
    .then(parsedArticles => {
        articles = parsedArticles
    })
}

//created a save function, using a fetch call to get into the database and store the new articles the user wants to save 
export const saveArticles = (newArticle) => {
    return fetch(`http://localhost:8088/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    })
}

//created a delete function, using a fetch call to get into the database and locate an article by a parameter using an article id(defined on another module)
export const deleteArticles = (articleId) => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE",
    })
}