function postItem(postData, userData) {

    return `
        <div class="post-item">
            <div class="content-right">
                <div class="avatar-img" style="background-image: url(${userData.avatar_url});"></div>
            </div>
            
            <div class="content-left">
                <h4>
                    ${userData.username}
                </h4>
                <p class="post-body">
                    ${postData.body}
                </p>
            </div>
        </div>
    `
}