function commentComponent(replyData, userData) {
    if (replyData.media_url !== null) {
        return `
            <div class="reply-item">
                <div class="content-right">
                    <div class="avatar-img" style="background-image: url(${userData.avatar_url});"></div>
                </div>
                
                <div class="content-left">
                    <h4 class="owner-name">
                        ${userData.username}
                    </h4>
                    <p class="post-body">
                        ${replyData.body}
                    </p>
                    <img src="${replyData.media_url}" width="300px"/>
                </div>
            </div>
        `
    } else {
        return `
            <div class="reply-item">
                <div class="content-right">
                    <div class="avatar-img" style="background-image: url(${userData.avatar_url});"></div>
                </div>
                
                <div class="content-left">
                    <h4 class="owner-name">
                        ${userData.username}
                    </h4>
                    <p class="post-body">
                        ${replyData.body}
                    </p>
                </div>
            </div>
        `
    }
}