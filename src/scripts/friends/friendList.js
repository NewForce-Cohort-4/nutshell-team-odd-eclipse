import { useUsers, getUsers } from "../Users/UserDataProvider.js"
import { useFriends, getFriends } from "./friendsDataProvider.js"
import { friendCard, newFriendCard } from "./friend.js"

const activeUserID = +sessionStorage.getItem("activeUser")
const contentTarget = document.querySelector("#friends")
const friendListTarget = document.querySelector("#friends-list")

export const FriendList = () => {
    getFriends()
        .then(getUsers)
        .then(() => {
            contentTarget.innerHTML = `
                <div class="friend-container flex-container-row" id="friends-list">
                    ${render()}
                </div>
                <div class="friend-list-footer" style="display: flex; justify-content: center;">
                    <a class="subdued" style="text-align:center" href="https://www.freepik.com/vectors/people">People vector created by ddraw - www.freepik.com</a>
                
                </div>`
            
            // render
        })

}

const render = () => {
    const users = useUsers()
    const friends = useFriends()
    let following = []
    let friendHTML = ""

    friendHTML = friends.map(friend => {
        // Convert the array from relationship objects to chore objects
        let profile = users.find(user => user.id === +friend.followingId)
        following.push(+friend.followingId)
        
        // Get HTML representation of product
        const html = friendCard(profile, friend.id)

        return html
    }).join("")

    let notFollowing = users.filter(user => {
        return following.includes(user.id) ? false : true
    })

    notFollowing = notFollowing.filter(user => {
        return (user.id !== activeUserID)
    })

    friendHTML += notFollowing.map(user => {return newFriendCard(user)}).join("")

    return friendHTML
}

