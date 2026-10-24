
const myName = "Daphrose";

// 1. Change the page title and h1
document.title = myName;
document.querySelector("h1").textContent = myName;

// 2. Set the profile image source and alt
const profileImage = document.querySelector("#profile-image");
profileImage.src = "profile.jpg";
profileImage.alt = `${myName}'s profile photo`;

// 3. Add active class to first navigation link
const firstLink = document.querySelector("nav a");
firstLink.classList.add("active");

// 4. Add three skills from an array
const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.querySelector("#skills-list");

skills.forEach(function(skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// 5. Display today's date in the footer
const today = new Date().toLocaleDateString();
document.querySelector("#last-updated").textContent =
  `Last updated: ${today}`;
