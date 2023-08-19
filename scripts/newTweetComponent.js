let newTweetContainer = document.querySelector(".new-tweet-container");
let newTweetText = document.querySelector(".new-tweet-text");
let newTweetAvatar = document.querySelector(".new-tweet-avatar");
let newTweetGif = document.querySelector(".new-tweet-gif");
let newTweetMedia = document.querySelector(".new-tweet-media");
let newTweetBtn = document.querySelector(".new-tweet-btn");
let newTweetChars = document.querySelector(".new-tweet-chars");
let newTweetMediaContainer = document.querySelector(".new-tweet-media-container");
let removeMediaBtn = document.querySelector(".remove-tweet-media-btn");

if (session != undefined) {
    newTweetAvatar.style.backgroundImage = `url(${session.avatar_url})`
} else {
    newTweetContainer.style.display = "none";
}

let mediaUrl = null;

async function fetchRandomGif() {
    let url = `https://api.giphy.com/v1/gifs/random?api_key=VfLh3WQsGC3kn1iOGyFXGlPyHvj2DJZ6&tag=&rating=g`;

    let response = await fetch(url);
    let data = await response.json();

    mediaUrl = data.data.images.original.url;

    newTweetMediaContainer.innerHTML = `
        <img src="${data.data.images.original.url}" width="100%"/>
        <div class="remove-tweet-media-btn" onclick="removeMedia()">
            <svg width="20px" viewBox="0 0 24 24" aria-hidden="true" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1hjwoze r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-12ym1je"><g><path fill="gray" d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
        </div class="remove-tweet-media-btn">
    `
}

function removeMedia() {
    newTweetMediaContainer.innerHTML = '';
    mediaUrl = null;
}

newTweetGif.onclick = function() {
    fetchRandomGif();
}

newTweetText.onfocus = () => {
    newTweetText.style.height = '100px';
    newTweetBtn.style.display = 'unset';
    newTweetChars.style.display = 'unset';
    newTweetGif.style.display = 'flex';
    newTweetMedia.style.display = 'flex';

    window.onkeyup = () => {
        newTweetChars.innerText = newTweetText.value.length + "/260";
    }
}

newTweetBtn.onclick = async () => {
    if (newTweetText.value.length > 0 || mediaUrl !== null) {
        let response = await createNewTweet(session.user_id, newTweetText.value, mediaUrl);
        mediaUrl = null;
        console.log(response);
        if (response.status === 201) {
            newTweetText.value = '';
            newTweetMediaContainer.innerHTML = '';

            tweets = await fetchAllPosts();
            users = await fetchAllUsers();

            renderTimelineTweets(tweets, users);
        }
    }
}
