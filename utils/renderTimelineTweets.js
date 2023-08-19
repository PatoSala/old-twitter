function renderTimelineTweets(tweets, users) {
    let timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';

    sortPosts(tweets);
    
    for (let i = 0; i < tweets.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (tweets[i].owner_id === users[j].user_id) {
                timeline.innerHTML = timeline.innerHTML + tweetComponent(tweets[i], users[j]);
            }
        }
    }
}