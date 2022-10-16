function click_club(e) {
    e.preventDefault();

    var club = document.getElementById("").value;
    var infoComment = localStorage.getItem("club-list");
    localStorage.setItem("club-name", club);
    localStorage.setItem("info-comments", infoComment);

    window.location.href = "club-page.html";
}