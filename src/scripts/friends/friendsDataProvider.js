let friends = ""

export const useFriends = () => friends.slice()

export const getFriends = () => {
    const userID = sessionStorage.getItem("activeUser")

    return fetch(`http://localhost:8088/friends?userId=${userID}`)
    .then(response => response.json())
    .then(parsedFriends => {
        friends = parsedFriends
    })
}

export const unfollow = relId => {
    console.log(relId)
    return fetch(`http://localhost:8088/friends/${relId}`, {
        method: "DELETE",
        })  
}

export const follow = (newFriendship) => {
    return fetch(`http://localhost:8088/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriendship)
    })
}