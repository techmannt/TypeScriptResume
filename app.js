let myName = "Nate Tompkins";
console.log("Name: " + myName.toUpperCase());
console.log("Career field: Web Developer");
console.log("I like computers.\n\n");
console.log("My Interests:");
console.log("* Programming");
console.log("* Jet skiing");
console.log("* Movies");

console.log("My Previous Experience:");
displayPosition("Some School", "Math, Chemistry, Physics, Biology, and English tutor", "Tutored students in those areas");
displayPosition("University of Georgia", "Undergraduate Teaching Assistant", "Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.");
displayPosition("Georgia Museum of Art", "Lead Programmer for iBeacon Experiment", "Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.");

function displayPosition(company, title, desc) {
  console.log("* " + title + " at " + company + " - " + desc);
}

function displaySkills(skill, cool) {
  console.log("* " + ((cool == true) ? "BAM: " : "") + skill);
}
console.log("My Skills:");
displaySkills("Trombone", false);
displaySkills("Visual Basic", true);
displaySkills("JavaScript", true);
