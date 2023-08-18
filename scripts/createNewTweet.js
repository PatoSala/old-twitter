async function createNewTweet(ownerId, tweetContent, mediaUrl) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/tweets';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify([{
            owner_id: ownerId,
            body: tweetContent,
            media_url: mediaUrl
        }])
    });
    return response;
}