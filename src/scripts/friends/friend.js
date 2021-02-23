/* 
 * DTB
 * This module serves to provide HTML for each event object
 * from the local API.
 */

// Build function to build an HTML event card given an event object
export const friendCard = (friendData, relID) => {
    
    return `
    <div class="friend-card">
        <div class="friend-info">
            <img src="${friendData.profilePicture}" class="profile-picture" alt="...">
            <h6 style="text-align: center;">${friendData.userName}</h6>
            <button type="button" class="btn btn-outline-danger btn-sm rounded-pill" id="delete-friend--${relID}">Unfollow</button>
        </div>
    </div>
    `
}

export const newFriendCard = (friendData) => {
    
    return `
    <div class="friend-card">
        <div class="friend-info">
            <img src="${friendData.profilePicture}" class="profile-picture" alt="...">
            <h6 style="text-align: center;">${friendData.userName}</h6>
            <button type="button" class="btn btn-primary btn-sm rounded-pill" id="follow-friend--${friendData.id}">Follow</button>
        </div>
    </div>
    `
}