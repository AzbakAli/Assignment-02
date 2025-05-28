// Assigmment 02


const studentName = "Azbak Ali";
const rollNumber = "S12345";
const totalPossibleMarks = 500;


let mathMarks = 85;
let scienceMarks = 92;
let englishMarks = 78;
let historyMarks = 88;
let computerMarks = 95;


const totalMarks = mathMarks + scienceMarks + englishMarks + historyMarks + computerMarks;
const percentage = (totalMarks / totalPossibleMarks) * 100;

let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

const markSheet = `
    <h2>Student Mark Sheet</h2>
    <p><strong>Name:</strong> ${studentName}</p>
    <p><strong>Roll Number:</strong> ${rollNumber}</p>
    <hr>
    <h3>Subject Marks:</h3>
    <p>Mathematics: ${mathMarks}</p>
    <p>Science: ${scienceMarks}</p>
    <p>English: ${englishMarks}</p>
    <p>History: ${historyMarks}</p>
    <p>Computer: ${computerMarks}</p>
    <hr>
    <h3>Results:</h3>
    <p><strong>Total Marks:</strong> ${totalMarks} out of ${totalPossibleMarks}</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
`;


document.write(markSheet);