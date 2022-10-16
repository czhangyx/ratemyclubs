function submission_confirmation(e) {
    e.preventDefault();

    var school = document.getElementById("school-name").value;
    if (school === "") {
        alert("School name can't be empty!");
    }
    var club =  document.getElementById("club-name").value;

    localStorage.setItem("school-name", school);
    localStorage.setItem("club-name", club);
    window.location.href = "search.html";
}
