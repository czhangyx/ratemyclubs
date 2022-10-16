function post_comment(e, comments) {
    e.preventDefault();

    var comment =  document.getElementById("comment-input").value;
    comments.push(comment);
    location.reload();
}

function delete_comment(e, comments) {
    e.preventDefault();

    

    comments.removeLast();
    location.reload();
}
