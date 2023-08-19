function navigation(route, params) {
    if (route === "home") {
        if (location.href.includes("/views")) {
            location.href = "../index.html";
        }
        else {
            location.href = "./index.html";
        }
    }

    if (route === "auth") {
        if (location.href.includes("/views")) {
            location.href = "./auth.html";
        }
        else {
            location.href = "./views/auth.html";
        }
    }

}