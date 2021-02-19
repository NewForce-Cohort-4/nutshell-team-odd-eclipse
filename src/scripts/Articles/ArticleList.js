//Author: Patti Perry
//Purpose: This module will print all the saved articles from the local database for the currently logged in user

import {getArticles, useArticles} from "./ArticleDataProvider.js"
import {article} from "./Article.js"

//creating a function Article list, using getArticles and getUsers to pull data from local server
export const ArticleList = () => {
    //use the function that fetches all the events and then use them here in ArticleList
    getArticles()
    .then(() => {
        const allArticles = useArticles()
        //console.log(allArticles)
        //html location for list of articles
        const articleContainer = document.querySelector("#articles")
        let articleHTMLString = ""


       // list of articles that is being identified by the userId
        const filteredArticles = allArticles.filter((singleArticle) => { 
           return singleArticle.userId === +(sessionStorage.getItem("activeUser"))
       })
       //console.log(filteredArticles)
       
       //creating a loop so the article card can be applied to each object-the filtered article
       for(let currentArticle of filteredArticles) {
        articleHTMLString += article(currentArticle)
       }
       //printing the html using string-template-literal function 
       //this is creating the title in my article container "Current Articles"
       //this is creating the "Create Articles" button with bootstrap and making it appear in the top of the article container
       articleContainer.innerHTML = `
        <section>
            <article class="flex-container-col">
                <div class="event-header flex-container-row">
                    <h2>Current News</h2>
                        <div class="button-container">
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="createArticle">Create Article</button>
                        </div>
                </div>
                <div>${articleHTMLString}</div>
            </article>
        </section>
       `
        
})}


