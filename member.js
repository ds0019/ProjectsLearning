function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsBtn = document.getElementById("member-skills-btn");
    var memberSkillsBtnIcon = document.getElementById("member-skills-btn-icon");
    var memberSkillsBtnText = document.getElementById("member-skills-btn-text");
    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsBtn.style.backgroundColor = "#ffffff";
        memberSkillsBtnIcon.style.color = "#000000";
        memberSkillsBtnText.style.color = "#000000";
    } else {
        memberSkills.style.display = "none";
        memberSkillsBtn.style.backgroundColor = "#000000";
        memberSkillsBtnIcon.style.color = "#ffffff";
        memberSkillsBtnText.style.color = "#ffffff";
    }
}