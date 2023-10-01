async function createNewComment(ownerId, originTweetId, commentContent) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/comments';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify([{
            owner_id: ownerId,
            origin_tweet_id: originTweetId,
            body: commentContent,
        }])
    });
    return response;
}