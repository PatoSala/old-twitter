let loginBtn = document.querySelector(".login-btn");

if (session != undefined) {
    loginBtn.style.display = "none";
}

let profileBtn = document.querySelector(".profile-btn");

if (session == undefined) {
    profileBtn.style.display = "none";
} else {
    profileBtn.style.backgroundImage = `url(${session.avatar_url})`
}