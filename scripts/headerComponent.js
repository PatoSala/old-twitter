let loginBtn = document.querySelector(".header-login-btn");
let profileBtn = document.querySelector(".profile-btn");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownUsername = document.querySelector(".username");
let dropdownEditUsername = document.querySelector(".edit");
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

document.onclick = function(event) {
    if (showDropdown) {
        if (event.target.classList.contains("profile-btn") === false) {
            toggleDropdown();
        }
    } else if (event.target.classList.contains("profile-btn")) {
        toggleDropdown();
    }
}

dropdownEditUsername.onclick = function() {
    let editProfileDialog = document.querySelector(".edit-profile-dialog");
    editProfileDialog.showModal();

}

dropdownLogoutBtn.onclick = function() {
    logout();
}
