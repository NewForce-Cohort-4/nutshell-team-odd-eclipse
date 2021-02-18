//Author: Patti Perry
//Purpose: This module will print all the saved articles from the local database for the currently logged in user

import {getArticles, useArticles} from "./ArticleDataProvider.js"
import {Article} from "./Article.js"

//creating a function Article list, using getArticles and getUsers to pull data from local server
export const ArticleList = () => {
    getArticles()
    .then(() => {
        const allArticles = useArticles()
        console.log(allArticles)
        const articleContainer = document.querySelector("#articles")
        let articleHTMLString = ""


       // list of articles that is being identified by the userId
       
        const filteredArticles = allArticles.filter((singleArticle) => {
            
           return singleArticle.userId == +(sessionStorage.getItem("activeUser"))
       })
       console.log(filteredArticles)
       
    
       for(let currentArticle of filteredArticles) {
        articleHTMLString += Article(currentArticle)
       }
       articleContainer.innerHTML += articleHTMLString
        
})}


//alert( sessionStorage.getItem("activeUser") )