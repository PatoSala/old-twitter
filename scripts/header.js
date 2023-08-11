let loginBtn = document.querySelector(".login-btn");
let profileBtn = document.querySelector(".profile-btn");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownUsername = document.querySelector(".username");
let dropdownLogoutBtn = document.querySelector(".logout");

if (session != undefined) {
    loginBtn.style.display = "none";
}

if (session == undefined) {
    profileBtn.style.display = "none";
} else {
    profileBtn.style.backgroundImage = `url(${session.avatar_url})`;
    dropdownUsername.innerText = session.username;
}

let showDropdown = false;

function toggleDropdown() {

    if (showDropdown === true) {
        showDropdown = false;
    } else {
        showDropdown = true;
    }

    if (showDropdown === true) {
        dropdownMenu.style.display = 'unset';
    } else {
        dropdownMenu.style.display = 'none';
    }
}

profileBtn.onclick = function() {
    toggleDropdown();
}

dropdownLogoutBtn.onclick = function() {
    logout();
}
