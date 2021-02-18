//Author: Patti Perry
//Purpose: To create a function getUsers, it uses a fetch call to gather all the information needed about individual users from json server and allows us to export it and use it on other modules.

let users = []

export const useUsers = () => users.slice()

export const getUsers = () => {
    return fetch(`http://localhost:8088/users`)
    .then(response => response.json())
    .then(parsedUsers => {
        users = parsedUsers
    })
}