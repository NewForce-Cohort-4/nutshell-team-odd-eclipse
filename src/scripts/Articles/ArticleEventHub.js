//Author: Patti Perry
//Purpose: This module will contain all the eventListeners that deal with articles. It will handle when the user clicks on Create Article, it will handle when the user clicks on Save and it will handle when the user clicks on Delete. 

import {articleForm} from "./ArticleForm.js"
import {saveArticles, deleteArticles} from "./ArticleDataProvider.js"
import {ArticleList} from "./ArticleList.js"

//container in index.html the eventListener is targeting
const eventHub = document.querySelector("main")

//add eventListener to eventHub, add click-event
eventHub.addEventListener("click", eventObject => {
    //conditional for if user clicks on the Create Article button
    if(eventObject.target.id === "createArticle") {
        //print the form for a new article
        articleForm()
    }
    //conditional for if user clicks on the save button
    else if (eventObject.target.id === "saveArticle") {
        //create a new article/object
        const newArticle = {
            userId: sessionStorage.getItem("activeUser"),
            title: document.querySelector("#title").value,
            synopsis: document.querySelector("#synopsis").value,
            url: document.querySelector("#url").value,
            timeStamp: new Date()
        }
        //use the saveEvent function to POST newArticle to local server
        //use .then to call ArticleList and reprint a refreshed list of all articles
        saveArticles(newArticle)
        .then(ArticleList)
    }
    //conditional for if user clicks on the delete button
    else if (eventObject.target.id.includes("deleteArticle")){
        //seperate the article id from the deleteArticle using a .split
        //so the function deleteArticles can identify which article to delete
        // (from line 12 in Article.js id="deleteArticle--${articleObject.id})
        let articleId = eventObject.target.id.split("--")[1]
        console.log(eventObject.target.id, articleId)

        //delete the article by the articleId
        //then refresh the list of articles printed the the page
        deleteArticles(articleId)
        .then(ArticleList)
    }
})


//trying out ways to get a timestamp
//new Date() =2021-02-19T02:06:40.384Z
//Date.now() =1613699889413
//new Date().getTime()
//new Date().toString()
//Date.now() /1000 |0 =1613699889413
//new Date().toTimeString() =21:00:50 GMT-0500 (Eastern Standard Time)