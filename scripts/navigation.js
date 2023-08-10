function navigation(route) {
    if (route === "home") {
        if (location.href.includes("/views")) {
            location.href = "../index.html";
        }
        else {
            location.href = "./index.html";
        }
    }

    if (route === "login") {
        if (location.href.includes("/views")) {
            location.href = "./login.html";
        }
        else {
            location.href = "./views/login.html";
        }
    }

    if (route === "register") {
        if (location.href.includes("/views")) {
            location.href = "./register.html";
        }
        else {
            location.href = "./views/register.html";
        }
    }
}