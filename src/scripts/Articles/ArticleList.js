//Author: Patti Perry
//Purpose: This module will print all the saved articles from the local database for the currently logged in user

import {getArticles, useArticles} from "./ArticleDataProvider.js"
import {getUsers, useUsers} from "../Users/UserDataProvider.js"
import {Article} from "./Article.js"

//creating a function Article list, using getArticles and getUsers to pull data from local server
export const ArticleList = () => {
    getArticles()
    .then(getUsers())
    .then(() => {
        const allArticles = useArticles()
        const allUsers = useUsers()
        const articleContainer = document.querySelector("#articles")
        articleContainer.innerHTML = ""

        //list of articles that is being identified by the userId
        allArticles.filter((singleArticle) => {
            const relatedUser = allUsers.filter(singleUser => { 
                return singleUser.id === +singleArticle.userId
            })
            articleContainer.innerHTML += Article(singleArticle, relatedUser)
        })

    })
}