function likePost(tweetId) {
    console.log(tweetId);
}

async function replyPost(ownerId, originTweetId) {
    let commentContent = document.querySelector(".tweet-reply-input").value;
    console.log(commentContent);
    let response = await createNewComment(ownerId, originTweetId, commentContent);
    if (response.ok) {
        let comments = await fetchCommentsByOriginTweetId(originTweetId);
        renderTweetReplies(comments, users);
        commentContent = ""
    }
}

async function viewPost(tweetId) {
    let tweetViewer = document.querySelector(".tweet-viewer");
    tweetViewer.showModal();
    tweetViewer.style.padding = "20px";
    tweetViewer.style.border = "border: 1px solid #e1e8ed";
    tweetViewer.innerText = "Cargando..."
    let tweetData = await fetchTweetById(tweetId);
    let ownerData = await fetchUserById(tweetData[0].owner_id);
    tweetViewer.innerHTML = tweetViewerComponent(tweetData[0], ownerData);
    let comments = await fetchCommentsByOriginTweetId(tweetId);
    console.log(comments);
    if (comments.length > 0) {
        renderTweetReplies(comments, users);
    }
}

function closeViewPost() {
    let tweetViewer = document.querySelector(".tweet-viewer");
    tweetViewer.innerHTML = "";
    tweetViewer.style.padding = "0";
    tweetViewer.style.border = "border: 0";
    tweetViewer.close();
}

function tweetViewerComponent(tweetData, userData) {
    const tweetBody = (tweetData) => {
        if (tweetData.media_url !== null) {
            return `
                <p class="tweet-body-text">
                    ${tweetData.body}
                </p>
            `
        } else {
            return `
                <p class="tweet-body-text">
                    ${tweetData.body}
                </p>
            `
        }
    }

    const replyComponent = (tweetData) => {
        if (session !== null) {
            return `
                <div class="tweet-reply-container">
                    <div class="tweet-reply-top">
                        <div class="tweet-owner-avatar" style="background-image: url(${session.avatar_url}); width: 35px; height: 35px;"></div>
                        <textarea class="tweet-reply-input" placeholder="Reply"></textarea>
                    </div>
                    <div class="tweet-reply-bottom">
                        <button class="tweet-reply-btn" onclick="replyPost('${session.user_id}', '${tweetData.tweet_id}')">Post</button>
                    </div>
                </div>
            `
        }
        return ``
    }

    return `
        <span class="tweet-viewer-close" onclick="closeViewPost()">x</span>
        <div class="tweet-viewer-header">
            <div class="tweet-owner-avatar" style="background-image: url(${userData.avatar_url})"></div>
            <span>
                <h4 class="tweet-owner-username">${userData.username}</h4>
                <p>${userData.email}</p>
            </span>
        </div>
        <div class="tweet-viewer-body">${tweetBody(tweetData)}</div>
        ${replyComponent(tweetData)}
        <div class="replies"></div>

    `
}

function tweetComponent(tweetData, userData) {
    if (tweetData.media_url !== null) {
        return `
            <div class="post-item" onclick="viewPost('${tweetData.tweet_id}')">
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
            <div class="post-item" onclick="viewPost('${tweetData.tweet_id}')">
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

let tweetReplyInput = document.querySelector(".tweet-reply-input");