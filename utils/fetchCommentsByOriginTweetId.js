async function fetchCommentsByOriginTweetId(originTweetId) {
    const URL = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/comments?origin_tweet_id=eq.${originTweetId}`
    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey
        }
    });
    const data = await response.json();
    return data;
}