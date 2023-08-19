async function register(username, email, password) {
    let url ='https://serysjohsewrcxkonnum.supabase.co/rest/v1/users';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            apiKey: apiKey,
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });

    if (response.status === 201) {
        login(email, password);
    }
}