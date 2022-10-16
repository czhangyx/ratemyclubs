function click_search(e) {

    const schoolname = localStorage.getItem("school-name");
    const clubname = localStorage.getItem("club-name");

    document.getElementById("school-name-input").textContent = schoolname;
}