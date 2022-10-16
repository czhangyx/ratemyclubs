function post_comment(e, comments) {
    e.preventDefault();

    var comment = document.getElementById("comment-input").value;
    var ip = $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
        console.log(JSON.stringify(data, null, 2));
      });
    console.log(ip);
    var ipComment = {ip: comment};
    comments.push(ipComment);
    location.reload();
}

function delete_comment(e, comments) {
    e.preventDefault();

    comments.removeLast();
    location.reload();
}
