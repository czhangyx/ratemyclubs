function define_dictionary() {
    const school_to_club = new Map();
    const club_to_info = new Map();

    // some Berkeley clubs
    school_to_club.set("uc berkeley", club_to_info);

    const ASUC = Array.of("The Associated Students of the University of California has been the official undergraduate student government since 1887.", new Array());
    club_to_info.set("associated students of the university of california", ASUC);

    const Codebase = Array.of("Codebase is a UC Berkeley student organization which aims to make industry experience more accessible to students and empower students to break into the software industry through semesterly projects with high-growth tech companies.", new Array());
    club_to_info.set("codebase", Codebase);

    const MLAB = Array.of("Machine Learning at Berkeley fosters an environment for passionate students to explore ML through projects, events, and education. Internally or externally, industry clients or research groups we provide many avenues to actively engage with the field.", new Array());
    club_to_info.set("machine learning at berkeley", MLAB);

    const Launchpad = Array.of("We are a project based organization that implements cutting edge research in machine learning, artificial intelligence, and data science into useful open source projects.", new Array());
    club_to_info.set("launchpad", Launchpad);

    const BioEHS = Array.of("The Bioengineering Honor Society (BioEHS) aims to advance bioengineering within the University of California, Berkeley, and beyond.", new Array());
    club_to_info.set("bioengineering honors society", BioEHS);

    const BMES = Array.of("The Biomedical Engineering Society student chapter is the largest bioengineering club on campus.", new Array());
    club_to_info.set("biomedical engineering society", BMES);

    const TBP = Array.of("Tau Beta Pi is the oldest national engineering honor society in the country, and one of the most recognized national societies.", new Array());
    club_to_info.set("tau beta pi", TBP);

    const HKN = Array.of("Eta Kappa Nu (HKN) is the national Electrical and Computer Engineering honor society.", new Array());
    club_to_info.set("eta kappa nu", HKN);

    const PCG = Array.of("Phoenix Consulting Group is UC Berkeley’s premier healthcare consulting organization.", new Array());
    club_to_info.set("phoenix consulting group", PCG);

    const BIG = Array.of("We run a student-raised investment fund, giving the Berkeley Community the opportunity to participate and gain experience in the world of investing.", new Array());
    club_to_info.set("berkeley investment group", BIG);

    const BC = Array.of("We run a student-raised investment fund, giving the Berkeley Community the opportunity to participate and gain experience in the world of investing.", new Array());
    club_to_info.set("berkeley consulting", BC);

    return school_to_club;
}


function submission_confirmation(e) {
    e.preventDefault();

    var school = document.getElementById("school-name").value;
    var club = document.getElementById("club-name").value;
    const dictionary = define_dictionary();

    if (school === "") {
        alert("School name can't be empty!");
    } else if (!dictionary.has(school.toLowerCase())) {
        alert("Sorry, school not found :( \nIf you want to add your school to our website, please contact czhangyx@berkeley.edu or evelyn0307@berkeley.edu. \nWe will let you know once your school is added!")
    } else if ((!club === "") && (!dictionary.get(school).has(club.toLowerCase()))) {
        alert("Sorry, club not found :( \nIf you want to add your school to our website, please contact czhangyx@berkeley.edu or evelyn0307@berkeley.edu. \nWe will let you know once your school is added!")
    } else {
        localStorage.setItem("school-name", school);
        localStorage.setItem("club-name", club);
        localStorage.setItem("dictionary", dictionary);
        window.location.href = "search.html";
    }
}
