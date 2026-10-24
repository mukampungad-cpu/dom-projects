
const students = [
  { name: "amina", course: "Frontend", score: 92 },
  { name: "Alice", course: "Backend", score: 75 },
  { name: "Patrick", course: "Frontend", score: 85 },
  { name: "Diane", course: "Design", score: 45 },
  { name: "Eric", course: "Backend", score: 68 },
  { name: "Grace", course: "Frontend", score: 96 },
  { name: "Kevin", course: "Design", score: 38 },
  { name: "Olivia", course: "Backend", score: 88 },
  { name: "Samuel", course: "Frontend", score: 55 },
  { name: "Chantal", course: "Design", score: 82 },
  { name: "David", course: "Backend", score: 42 },
  { name: "Marie", course: "Frontend", score: 78 }
];

const studentList = document.getElementById("student-list");
const studentCount = document.getElementById("student-count");
const averageScore = document.getElementById("average-score");
const topStudents = document.getElementById("top-students");

function render() {
  // Clear the old cards before creating new ones
  studentList.replaceChildren();

  // Sort a COPY: Frontend students appear first
  const sortedStudents = [...students].sort((a, b) => {
    if (a.course === "Frontend" && b.course !== "Frontend") {
      return -1;
    }

    if (a.course !== "Frontend" && b.course === "Frontend") {
      return 1;
    }

    return 0;
  });

  // Display total number of students
  studentCount.textContent = students.length;

  // Calculate average score
  const totalScore = students.reduce(
    (total, student) => total + student.score,
    0
  );

  const average = totalScore / students.length;
  averageScore.textContent = average.toFixed(1) + "%";

  // Find the highest score and all students who achieved it
  const highestScore = Math.max(
    ...students.map(student => student.score)
  );

  const bestStudents = students
    .filter(student => student.score === highestScore)
    .map(student => student.name);

  topStudents.textContent =
    bestStudents.join(", ") + " (" + highestScore + "%)";

  // Create a card for every student
  sortedStudents.forEach(student => {
    const card = document.createElement("article");
    card.classList.add("student-card");

    // Highlight scores of 80 or above
    if (student.score >= 80) {
      card.classList.add("high");
    }

    // Mark failed scores below 50 in red
    if (student.score < 50) {
      card.classList.add("red");
    }

    const name = document.createElement("h3");
    name.textContent = student.name;

    const course = document.createElement("p");
    course.textContent = "Course: " + student.course;

    const score = document.createElement("p");
    score.classList.add("score");
    score.textContent = student.score + "%";

    const status = document.createElement("p");
    status.classList.add("status");

    if (student.score >= 80) {
      status.textContent = "Excellent";
    } else if (student.score >= 50) {
      status.textContent = "Passed";
    } else {
      status.textContent = "Failed";
    }

    // Add all elements to the card
    card.append(name, course, score, status);

    // Add the card to the grid
    studentList.append(card);
  });
}

// Display the students when the page loads
render();
