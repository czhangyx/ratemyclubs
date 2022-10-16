const schoolList = {school1: berkeley}
const berkeley = {club1: ASUC, club2: BerkeleyArtStudio, club3: CalGreeks}
const ASUC = {info: "The Associated Students of the University of California has been the official undergraduate student government since 1887."}
const BerkeleyArtStudio = {info: "Find art classes for the campus community and the public, from digital design to drawing to ceramics."}
const CalGreeks = {info: "Connect with alumni and stay connected to Berkeley after graduation."}

function submission_confirmation(e) {
    e.preventDefault();

    var school =  document.getElementById("school_name").value
    var club =  document.getElementById("club_name").value

    console.log(school)
    console.log(club + club.info)

}
