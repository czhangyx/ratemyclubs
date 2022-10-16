function post_comment(e, comments) {
    e.preventDefault();

    var comment = document.getElementById("comment-input").value;
    var ip = fetch("https://api.ipify.org?format=json").then(results => results.json());
    var ipComment = {};
    ipComment[ip] = comment;
    comments.push(ipComment);
    location.reload();
}

function delete_comment(e, comments) {
    e.preventDefault();

    comments.removeLast();
    location.reload();
}
