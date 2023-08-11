function logout() {
    sessionStorage.removeItem("session");
    navigation('home');
}