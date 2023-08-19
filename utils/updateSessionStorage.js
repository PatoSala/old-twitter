function updateSessionStorage(key, value) {
    sessionStorage.removeItem(key);
    sessionStorage.setItem(key, JSON.stringify(value));
}