function click_club(e, clubname) {
    e.preventDefault();

    console.log(clubname);
    var infoComment = localStorage.getItem("club-list");
    localStorage.setItem("club-name", clubname);
    localStorage.setItem("info-comments", infoComment);

    window.location.href = "club-page.html";
}