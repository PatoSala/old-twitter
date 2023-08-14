function postItem(postData, userData) {

    return `
        <div class="post-item">
            <div class="content-right">
                <div class="avatar-img" style="background-image: url(${userData.avatar_url});"></div>
            </div>
            
            <div class="content-left">
                <span>
                    <h4 class="owner-name">
                        ${userData.username}
                    </h4>
                    <span>
                        ${postData.created_at}
                    </span>
                </span>
                <p class="post-body">
                    ${postData.body}
                </p>
            </div>
        </div>
    `
}