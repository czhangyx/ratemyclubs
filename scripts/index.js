function define_dictionary() {
    const school_to_club = {};
    const club_to_info = {};

    // some Berkeley clubs
    const ASUC = ["The Associated Students of the University of California has been the official undergraduate student government since 1887.", new Array()];
    club_to_info["Associated Students of the University of California"] = ASUC

    const BC = ["We run a student-raised investment fund, giving the Berkeley Community the opportunity to participate and gain experience in the world of investing.", new Array()];
    club_to_info["Berkeley Consulting"] = BC;

    const BIG = ["We run a student-raised investment fund, giving the Berkeley Community the opportunity to participate and gain experience in the world of investing.", new Array()];
    club_to_info["Berkeley Investment Group"] = BIG;

    const BioEHS = ["The Bioengineering Honor Society (BioEHS) aims to advance bioengineering within the University of California, Berkeley, and beyond.", new Array()];
    club_to_info["Bioengineering Honors Society"] = BioEHS;

    const BMES = ["The Biomedical Engineering Society student chapter is the largest bioengineering club on campus.", new Array()];
    club_to_info["Biomedical Engineering Society"] = BMES;

    const Codebase = ["Codebase is a UC Berkeley student organization which aims to make industry experience more accessible to students and empower students to break into the software industry through semesterly projects with high-growth tech companies.", new Array()];
    club_to_info["Codebase"] = Codebase;

    const HKN = ["Eta Kappa Nu (HKN) is the national Electrical and Computer Engineering honor society.", new Array()];
    club_to_info["Eta Kappa Nu"] = HKN;

    const Launchpad = ["We are a project based organization that implements cutting edge research in machine learning, artificial intelligence, and data science into useful open source projects.", new Array()];
    club_to_info["Launchpad"] = Launchpad;

    const MLAB = ["Machine Learning at Berkeley fosters an environment for passionate students to explore ML through projects, events, and education. Internally or externally, industry clients or research groups we provide many avenues to actively engage with the field.", new Array()];
    club_to_info["Machine Learning at Berkeley", MLAB];

    const PCG = ["Phoenix Consulting Group is UC Berkeley’s premier healthcare consulting organization.", new Array()];
    club_to_info["Phoenix Consulting Group"] = PCG;

    const TBP = ["Tau Beta Pi is the oldest national engineering honor society in the country, and one of the most recognized national societies.", new Array()];
    club_to_info["Tau Beta Pi"] = TBP;


    school_to_club["uc berkeley"] = club_to_info
    return school_to_club;
}


function submission_school(e) {
    e.preventDefault();

    var school = document.getElementById("school-name").value;
    var dictionary = define_dictionary();

    if (school === "") {
        alert("School name can't be empty!");
    } else if (!dictionary[school.toLowerCase()]) {
        alert("Sorry, school not found :( \nIf you want to add your school to our website, please contact czhangyx@berkeley.edu or evelyn0307@berkeley.edu. \nWe will let you know once your school is added!")
    } else {
        localStorage.setItem("school-name", school);
        localStorage.setItem("club-list", JSON.stringify(dictionary[school.toLowerCase()]));
        window.location.href = "search.html"
    }
}

function submission_club(e) {
    e.preventDefault();

    var school = document.getElementById("school-name").value;
    var club = document.getElementById("club-name").value;
    var dictionary = define_dictionary();

    if (school === "") {
        alert("School name can't be empty!");
    } else if (!dictionary[school.toLowerCase()]) {
        alert("Sorry, school not found :( \nIf you want to add your school to our website, please contact czhangyx@berkeley.edu or evelyn0307@berkeley.edu. \nWe will let you know once your school is added!")
    } else if (!dictionary[school.toLowerCase()][club]) {
        alert(`Sorry, club not found at ${school.toLowerCase()} :( \nIf you want to add a club to our website, please contact czhangyx@berkeley.edu or evelyn0307@berkeley.edu. \nWe will let you know once the club is added!`)
    } else {
        localStorage.setItem("school-name", school);
        localStorage.setItem("club-name", club);
        localStorage.setItem("info-comments", dictionary[school.toLowerCase()][club]);
        window.location.href = "club-page.html";
    }
}
