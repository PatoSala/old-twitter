function sortPosts(postsArray) {
    postsArray.sort(function(first, second) {
        return Date.parse(second.created_at) - Date.parse(first.created_at);
    });
}