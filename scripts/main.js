const schoolList = {school1: berkeley}
const berkeley = {club1: ASUC, club2: BerkeleyArtStudio, club3: CalGreeks}
const location = {href: 'file:///Users/xinyizheng/Desktop/rmc/ratemyclubs/rmc.html'}
const ASUC = {info: location.href}
const BerkeleyArtStudio = {info: "Find art classes for the campus community and the public, from digital design to drawing to ceramics."}
const CalGreeks = {info: "Connect with alumni and stay connected to Berkeley after graduation."}

function submission_confirmation(e) {
    e.preventDefault();

    var school =  document.getElementById("school_name").value
    var club =  document.getElementById("club_name").value

    console.log(school)
    console.log(club + club.info)

}
