function likePost(tweetId) {
    console.log(tweetId);
}

function tweetComponent(tweetData, userData) {

    if (tweetData.media_url !== null) {
        return `
            <div class="post-item" onclick="likePost('${tweetData.id}')">
                <div class="content-right">
                    <div class="avatar-img" style="background-image: url(${userData.avatar_url});"></div>
                </div>
                
                <div class="content-left">
                    <h4 class="owner-name">
                        ${userData.username}
                    </h4>
                    <p class="post-body">
                        ${tweetData.body}
                    </p>
                    <img src="${tweetData.media_url}" width="300px"/>
                </div>
            </div>
        `
    } else {
        return `
            <div class="post-item" onclick="likePost('${tweetData.id}')">
                <div class="content-right">
                    <div class="avatar-img" style="background-image: url(${userData.avatar_url});"></div>
                </div>
                
                <div class="content-left">
                    <h4 class="owner-name">
                        ${userData.username}
                    </h4>
                    <p class="post-body">
                        ${tweetData.body}
                    </p>
                </div>
            </div>
        `
    }
    
}