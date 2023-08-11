let newTweetContainer = document.querySelector(".new-tweet-container");
let newTweetText = document.querySelector(".new-tweet-text");
let newTweetAvatar = document.querySelector(".new-tweet-avatar");
let newTweetBtn = document.querySelector(".new-tweet-btn");

if (session != undefined) {
    newTweetAvatar.style.backgroundImage = `url(${session.avatar_url})`
} else {
    newTweetContainer.style.display = "none";
}

newTweetText.onfocus = () => {
    newTweetText.style.height = '100px';
    newTweetBtn.style.display = 'unset';
}

newTweetBtn.onclick = async () => {
    if (newTweetText.value.length > 0) {
        let response = await publishTweet(session.user_id, newTweetText.value);

        if (response.status === 201) {
            newTweetText.value = '';

            posts = await fetchPosts();
            users = await fetchUsers();

            sortPosts(posts);

            let postsContainer = document.querySelector('.posts-container');
            postsContainer.innerHTML = '';
            
            for (let i = 0; i < posts.length; i++) {
                for (let j = 0; j < users.length; j++) {
                    if (posts[i].owner_id === users[j].user_id) {
                        postsContainer.innerHTML = postsContainer.innerHTML + postItem(posts[i], users[j]);
                    }
                }
            }
        }
    }
}
