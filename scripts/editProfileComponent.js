let editProfileDialog = document.querySelector(".edit-profile-dialog");
let editAvatarImg = document.querySelector(".edit-avatar-img");
let cancelButton = document.querySelector(".edit-cancel-btn");
let saveButton = document.querySelector(".edit-save-btn");
let avatarImg = document.querySelector(".select-avatar-image");
let usernameInput = document.querySelector(".edit-username-input");
let emailInput = document.querySelector(".edit-email-input");

cancelButton.onclick = function() {
    editProfileDialog.close();
}

// Replace default values with logged user data
if (session !== undefined) {
    editAvatarImg.style.backgroundImage = `url(${session.avatar_url})`;
    usernameInput.placeholder = session.username;
    emailInput.placeholder = session.email;
}

// Update username function
async function updateUsername(username) {
    let response = await fetch(`https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${session.user_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        },
        body: JSON.stringify({
            username: username
        })
    });
    return response;
}

// Update email function
async function updateEmail(email) {
    let response = await fetch(`https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${session.user_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        },
        body: JSON.stringify({
            email: email
        })
    });
    return response;
}

// Update profile picture function
async function uploadAndUpdateAvatar(file) {
    let formData = new FormData();
    formData.append('', file, `public/${session.user_id}`);

    let url = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/avatars/${session.user_id}`;
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Cache-Control': `max-age=0`,
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        },
        body: formData
    });
    
    if (response.status === 200) {
        let newAvatarUrl = `https://serysjohsewrcxkonnum.supabase.co/storage/v1/object/public/avatars/${session.user_id}`;

        let response = await fetch(`https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${session.user_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
                apiKey: apiKey
            },
            body: JSON.stringify({
                avatar_url: newAvatarUrl
            })
        })
        return response;
    }
}

saveButton.onclick = async function() {
    saveButton.innerText = "Guardando...";

    if (usernameInput.value.length > 0) {
        await updateUsername(usernameInput.value);
    }

    if (emailInput.value.length > 0) {
        await updateEmail(emailInput.value);
    }


    if (avatarImg.files[0] !== undefined) {
        await uploadAndUpdateAvatar(avatarImg.files[0]);
    }
    
    let updateUserData = await fetchUserById(session.user_id);
    updateSessionStorage('session', updateUserData);
    location.reload();
}

