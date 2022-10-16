function click_club(e) {
    e.preventDefault();

    localStorage.setItem("school-name", school);
    localStorage.setItem("club-name", club);
    localStorage.setItem("dictionary", school_to_club);
    window.location.href = "club-page.html";
}