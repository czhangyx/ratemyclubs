function click_club(e, clubname) {
    e.preventDefault();

    console.log(localStorage.getItem("club-list"))
    var infoComment = localStorage.getItem("club-list")[clubname];
    localStorage.setItem("club-name", clubname);
    localStorage.setItem("info-comments", infoComment);

    window.location.href = "club-page.html";
}