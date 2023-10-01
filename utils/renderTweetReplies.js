function renderTweetReplies(comments, users) {
    let replies = document.querySelector('.replies');
    replies.innerHTML = '';

    sortPosts(comments);
    
    for (let i = 0; i < comments.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (comments[i].owner_id === users[j].user_id) {
                replies.innerHTML = replies.innerHTML + commentComponent(comments[i], users[j]);
            }
        }
    }
}