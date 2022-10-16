function post_comment(e, comments) {
    e.preventDefault();

    const comment = document.getElementById("comment-input");
    const ip = fetch("https://api.ipify.org?format=json").then(results => results.json());
    console.log(ip)
    const ipComment = {};
    ipComment[ip] = comment;
    comments.push(ipComment);
    location.reload();
}

function delete_comment(e, comments) {
    e.preventDefault();

    confirm("Are you sure you want to remove this comment? This action cannot be undone.");
    comments.removeLast();
    location.reload();
}
