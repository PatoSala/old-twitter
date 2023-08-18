async function fetchUserById(userId) {
    let url = `https://serysjohsewrcxkonnum.supabase.co/rest/v1/users?user_id=eq.${userId}`;
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey,
        }
    });
    let data = await response.json();
    return data[0];
}