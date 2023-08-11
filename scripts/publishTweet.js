async function publishTweet(ownerId, tweetContent) {
    let url = 'https://serysjohsewrcxkonnum.supabase.co/rest/v1/twitts';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer' + apiKey,
            apiKey: apiKey
        },
        body: JSON.stringify([{
            owner_id: ownerId,
            body: tweetContent
        }])
    });

    return response;
}