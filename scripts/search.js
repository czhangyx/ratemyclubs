function click_club(e, clubname) {
    e.preventDefault();

    const infoComment = JSON.parse(localStorage.getItem("club-list"))[clubname];
    localStorage.setItem("club-name", clubname);
    localStorage.setItem("info-comments", infoComment);

    window.location.href = "club-page.html";
}