//Author: Patti Perry
//Purpose: This module uses fetch calls and gathers all the data needed to support the functions of getArticles, saveArticles, deleteArticles

let articles = []

export const useArticles = () => articles.slice()

//pulling data for getArticles from the local json server, converting the data, passing it back into the array articles
export const getArticles = () => {
    return fetch (`http://localhost:8088/articles`)
    .then(response => response.json())
    .then(parsedArticles => {
        articles = parsedArticles
    })
}