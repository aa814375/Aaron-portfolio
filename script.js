// ===== ES6 Features =====

// let and const
const fullName = "Aaron Jonathan Ignacio";
let year = 2025;

// Template literal
document.getElementById("intro").innerText = `Hi, I'm ${fullName}`;
document.getElementById("tagline").innerText = `A BSIT Student | My Portfolio ${year}`;

// Array of skills/hobbies
const skills = ["HTML & CSS", "JavaScript (ES6)", "Java Programming", "Football", "Music Production"];

// Destructuring
const [tech1, tech2, ...otherSkills] = skills;
console.log(`Main skills: ${tech1}, ${tech2}`);
console.log("Other skills:", otherSkills);

// Spread operator
const updatedSkills = [...skills, "Teamwork", "Problem Solving"];

// Arrow function + loop
const displaySkills = (arr) => {
  arr.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("skills-list").appendChild(li);
  });
};

// Call function
displaySkills(updatedSkills);
