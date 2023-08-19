let loadTweetsBox = document.querySelector('.load-tweets-box');
let newTweets;


loadTweetsBox.onclick = function() {
    renderTimelineTweets(newTweets, users);
    loadTweetsBox.style.display = 'none';
}

async function checkForNewTweets() {
    newTweets = await fetchAllPosts();

    if (newTweets.length > tweets.length) {

        loadTweetsBox.style.display = 'flex';
        loadTweetsBox.innerText = `See new tweets`;
    }
}