const fetchTweetById = async (tweetId) => {
    const URL = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/tweets?tweet_id=eq.${tweetId}`
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