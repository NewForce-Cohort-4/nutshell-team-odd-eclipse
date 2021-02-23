import { useUsers, getUsers } from "../Users/UserDataProvider.js"
import { useFriends, getFriends } from "./friendsDataProvider.js"
import { friendCard, newFriendCard } from "./friend.js"

const contentTarget = document.querySelector(".friend-container")

export const FriendList = () => {
    getFriends()
        .then(getUsers)
        .then(render)

}

const render = () => {
    const users = useUsers()
    const friends = useFriends()
    let following = []

    console.log(friends)
    console.log(users)

    contentTarget.innerHTML = friends.map(friend => {
        // Convert the array from relationship objects to chore objects
        let profile = users.find(user => user.id === friend.followingId)
        following.push(friend.followingId)

        // Get HTML representation of product
        const html = friendCard(profile, friend.id)

        return html
    }).join("")

    contentTarget.innerHTML = users.map(user => {
        // Convert the array from relationship objects to chore objects
        let newFriend = following.find(follow => follow === user.Id)

        // Get HTML representation of product
        const html = newFriendCard(newFriend, user.id)

        return html
    }).join("")

}

{/* <a href="https://www.freepik.com/vectors/people">People vector created by ddraw - www.freepik.com</a> */}