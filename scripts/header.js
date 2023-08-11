let loginBtn = document.querySelector(".login-btn");

if (session != undefined) {
    loginBtn.style.display = "none";
}

let profileBtn = document.querySelector(".profile-btn");
let newTweetBtn = document.querySelector(".new-tweet-btn");

if (session == undefined) {
    profileBtn.style.display = "none";
    newTweetBtn.style.display = "none";
} else {
    profileBtn.style.backgroundImage = `url(${session.avatar_url})`
}