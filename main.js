"use strict";

// ========================================
// 1. VARIABLES AND DATA TYPES
// ========================================

console.log("--- Variables and Data Types ---");

const myName = "Evans Wairimu";
const myAge = 22;
const isStudent = true;
const favoriteColors = ["blue", "black", "green"];
const today = new Date();

console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);
console.log("Name data type:", typeof myName);
console.log("Age data type:", typeof myAge);
console.log("Student status data type:", typeof isStudent);


// ========================================
// 2. NUMBER OPERATIONS
// ========================================

console.log("--- Number Operations ---");

const numberA = 10;
const numberB = 3;

console.log("Addition:", numberA + numberB);
console.log("Subtraction:", numberA - numberB);
console.log("Multiplication:", numberA * numberB);
console.log("Division:", numberA / numberB);
console.log("Remainder:", numberA % numberB);
console.log("Power:", numberA ** numberB);

let operationCount = 0;
operationCount++;
console.log("After increment:", operationCount);
operationCount--;
console.log("After decrement:", operationCount);


// ========================================
// 3. STRING OPERATIONS
// ========================================

console.log("--- String Operations ---");

const firstName = "Evans";
const lastName = "Wairimu";
const fullName = firstName + " " + lastName;

console.log("Full name:", fullName);
console.log(`Hello, ${firstName}!`);
console.log(`${firstName} has ${firstName.length} letters.`);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", firstName.charAt(0));
console.log("Contains Evans:", fullName.includes("Evans"));


// ========================================
// 4. COMPARISON AND LOGICAL OPERATORS
// ========================================

console.log("--- Comparison Operators ---");

console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log('5 == "5":', 5 == "5");
console.log("5 !== 3:", 5 !== 3);

console.log("--- Logical Operators ---");

console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !true);


// ========================================
// 5. FUNCTIONS
// ========================================

console.log("--- Functions ---");

function greet(person) {
    return `Hello, ${person}!`;
}

console.log(greet("Evans"));

const addNumbers = function (first, second) {
    return first + second;
};

console.log("Addition:", addNumbers(8, 4));

const multiplyNumbers = (first, second) => first * second;

console.log("Multiplication:", multiplyNumbers(6, 3));

function divideNumbers(first, second) {
    if (second === 0) {
        return "Cannot divide by zero";
    }

    return first / second;
}

console.log("Division:", divideNumbers(12, 3));
console.log("Division by zero:", divideNumbers(12, 0));


// ========================================
// 6. FUNCTION EXERCISES
// ========================================

console.log("--- Function Exercises ---");

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(value) {
    return value % 2 === 0;
}

function getInitials(personName) {
    return personName
        .trim()
        .split(/\s+/)
        .filter(part => part.length > 0)
        .map(part => part[0].toUpperCase())
        .join("");
}

function reverseString(value) {
    return value.split("").reverse().join("");
}

console.log("Rectangle area:", calculateArea(5, 4));
console.log("Temperature:", celsiusToFahrenheit(25));
console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));
console.log("Initials:", getInitials("Evans Wairimu"));
console.log("Reversed:", reverseString("JavaScript"));


// ========================================
// 7. DEFAULT PARAMETERS
// ========================================

console.log("--- Default Parameters ---");

function greetPerson(person = "Guest", greeting = "Hello") {
    return `${greeting}, ${person}!`;
}

function calculateTip(bill, tipPercent = 15) {
    return bill * tipPercent / 100;
}

console.log(greetPerson());
console.log(greetPerson("Evans"));
console.log(greetPerson("Evans", "Welcome"));
console.log("Tip at 15%:", calculateTip(1000));
console.log("Tip at 10%:", calculateTip(1000, 10));


// ========================================
// 8. CONDITIONALS AND SWITCH
// ========================================

console.log("--- Grade Checker ---");

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    }

    return "F";
}

console.log("Score 95:", getGrade(95));
console.log("Score 84:", getGrade(84));
console.log("Score 73:", getGrade(73));
console.log("Score 62:", getGrade(62));
console.log("Score 45:", getGrade(45));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day";
    }
}

console.log("Day 0:", getDayName(0));
console.log("Day 3:", getDayName(3));
console.log("Day 6:", getDayName(6));
console.log("Day 9:", getDayName(9));


// ========================================
// 9. LOOPS
// ========================================

console.log("--- For Loop ---");

for (let loopNumber = 1; loopNumber <= 5; loopNumber++) {
    console.log(loopNumber);
}

console.log("--- Even Numbers ---");

for (let evenNumber = 1; evenNumber <= 20; evenNumber++) {
    if (evenNumber % 2 === 0) {
        console.log(evenNumber);
    }
}

console.log("--- While Loop ---");

let whileNumber = 1;

while (whileNumber <= 5) {
    console.log(whileNumber);
    whileNumber++;
}

console.log("--- For...of Loop ---");

const fruits = ["Mango", "Banana", "Orange", "Pineapple"];

for (const fruit of fruits) {
    console.log(fruit);
}

console.log("--- FizzBuzz ---");

for (let fizzNumber = 1; fizzNumber <= 100; fizzNumber++) {
    if (fizzNumber % 3 === 0 && fizzNumber % 5 === 0) {
        console.log("FizzBuzz");
    } else if (fizzNumber % 3 === 0) {
        console.log("Fizz");
    } else if (fizzNumber % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(fizzNumber);
    }
}

console.log("--- Star Triangle ---");

for (let starRow = 1; starRow <= 5; starRow++) {
    console.log("*".repeat(starRow));
}


// ========================================
// 10. CONSOLE CALCULATOR
// ========================================

console.log("--- Console Calculator ---");

function calculate(first, operator, second) {
    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return second === 0 ? "Cannot divide by zero" : first / second;
        case "%":
            return second === 0 ? "Cannot calculate remainder by zero" : first % second;
        case "**":
            return first ** second;
        default:
            return "Invalid operator";
    }
}

console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 % 3 =", calculate(10, "%", 3));
console.log("2 ** 3 =", calculate(2, "**", 3));
console.log("10 / 0 =", calculate(10, "/", 0));


// ========================================
// 11. ARRAYS AND ARRAY METHODS
// ========================================

console.log("--- Arrays ---");

const studentNames = ["Amina", "Brian", "Grace", "David"];

console.log("All students:", studentNames);
console.log("First student:", studentNames[0]);
console.log("Second student:", studentNames[1]);
console.log("Number of students:", studentNames.length);

console.log("--- Array Methods ---");

const subjects = ["Math", "English", "Science"];

console.log("Original:", subjects);

subjects.push("Computer Studies");
console.log("After push:", subjects);

subjects.pop();
console.log("After pop:", subjects);

subjects.unshift("History");
console.log("After unshift:", subjects);

subjects.shift();
console.log("After shift:", subjects);

subjects[1] = "Geography";
console.log("After update:", subjects);

console.log("--- Array Searching and Transformation ---");

const scores = [45, 82, 67, 91, 38, 76];

const doubledScores = scores.map(score => score * 2);
const passingScores = scores.filter(score => score >= 50);
const firstHighScore = scores.find(score => score >= 80);

console.log("Doubled scores:", doubledScores);
console.log("Passing scores:", passingScores);
console.log("First score of 80 or more:", firstHighScore);

console.log("--- Total and Average ---");

const testScores = [75, 80, 65, 90, 70];

const totalScore = testScores.reduce(
    (total, score) => total + score,
    0
);

const averageScore = totalScore / testScores.length;

console.log("Scores:", testScores);
console.log("Total:", totalScore);
console.log("Average:", averageScore);


// ========================================
// 12. OBJECTS AND JSON
// ========================================

console.log("--- JavaScript Objects ---");

const exampleStudent = {
    name: "Amina",
    age: 18,
    subject: "Mathematics",
    score: 85
};

console.log("Student:", exampleStudent);
console.log("Name:", exampleStudent.name);
console.log("Score:", exampleStudent.score);

exampleStudent.score = 92;
exampleStudent.grade = "A";

console.log("Updated score:", exampleStudent.score);
console.log("Grade:", exampleStudent.grade);

console.log("--- Student Records ---");

const classStudents = [
    { name: "Amina", score: 85 },
    { name: "Brian", score: 72 },
    { name: "Grace", score: 94 },
    { name: "David", score: 48 }
];

for (const pupil of classStudents) {
    console.log(`${pupil.name} scored ${pupil.score}`);
}

console.log("--- JSON ---");

const learner = {
    name: "Amina",
    score: 85,
    passed: true
};

const jsonText = JSON.stringify(learner);
console.log("JSON text:", jsonText);

const restoredLearner = JSON.parse(jsonText);
console.log("Restored name:", restoredLearner.name);
console.log("Restored score:", restoredLearner.score);

console.log("--- Error Handling ---");

const validJSON = '{"name":"Amina","score":85}';
const invalidJSON = '{"name":"Amina","score":}';

try {
    const parsedStudent = JSON.parse(validJSON);
    console.log("Student:", parsedStudent.name);
} catch (error) {
    console.log("Could not read student data.");
}

try {
    const parsedData = JSON.parse(invalidJSON);
    console.log(parsedData);
} catch (error) {
    console.log("Invalid JSON detected!");
}


// ========================================
// 13. STUDENT GRADE TRACKER
// ========================================

console.log("--- Student Grade Tracker ---");

const gradeTrackerStudents = [
    { name: "Amina", score: 85 },
    { name: "Brian", score: 72 },
    { name: "Grace", score: 94 },
    { name: "David", score: 48 }
];

function calculateGrade(score) {
    return getGrade(score);
}

function getClassStatistics(students) {
    if (students.length === 0) {
        return {
            average: null,
            topStudent: null
        };
    }

    const total = students.reduce(
        (sum, learner) => sum + learner.score,
        0
    );

    const topStudent = students.reduce(
        (best, learner) =>
            learner.score > best.score ? learner : best
    );

    return {
        average: total / students.length,
        topStudent: topStudent
    };
}

for (const learner of gradeTrackerStudents) {
    console.log(
        `${learner.name}: ${learner.score} - Grade ${calculateGrade(learner.score)}`
    );
}

const initialStatistics = getClassStatistics(gradeTrackerStudents);

console.log("Total students:", gradeTrackerStudents.length);
console.log("Class average:", initialStatistics.average);
console.log("Top student:", initialStatistics.topStudent.name);


// ========================================
// 14. WEBPAGE ELEMENTS
// ========================================

const showStudentsButton = document.getElementById("show-students");
const studentList = document.getElementById("student-list");
const averageElement = document.getElementById("class-average");
const topStudentElement = document.getElementById("top-student");

const studentForm = document.getElementById("student-form");
const newStudentNameInput = document.getElementById("new-student-name");
const newStudentScoreInput = document.getElementById("new-student-score");
const addStudentMessage = document.getElementById("add-student-message");

const calculatorForm = document.getElementById("calculator-form");
const firstNumberInput = document.getElementById("number-one");
const operatorInput = document.getElementById("operator");
const secondNumberInput = document.getElementById("number-two");
const calculatorResult = document.getElementById("calculator-result");


// ========================================
// 15. DISPLAY STUDENTS AND STATISTICS
// ========================================

function renderStudents() {
    studentList.replaceChildren();

    for (const learner of gradeTrackerStudents) {
        const listItem = document.createElement("li");

        listItem.textContent =
            `${learner.name} — Score: ${learner.score}, Grade: ${calculateGrade(learner.score)}`;

        studentList.appendChild(listItem);
    }

    const statistics = getClassStatistics(gradeTrackerStudents);

    if (statistics.average === null) {
        averageElement.textContent = "Class average: No students yet";
        topStudentElement.textContent = "Top student: No students yet";
        return;
    }

    averageElement.textContent =
        `Class average: ${statistics.average.toFixed(2)}`;

    topStudentElement.textContent =
        `Top student: ${statistics.topStudent.name} (${statistics.topStudent.score})`;
}

showStudentsButton.addEventListener("click", renderStudents);


// ========================================
// 16. ADD STUDENTS WITH VALIDATION
// ========================================

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = newStudentNameInput.value.trim();
    const scoreText = newStudentScoreInput.value.trim();
    const score = Number(scoreText);

    if (name === "" || scoreText === "") {
        addStudentMessage.textContent = "Enter a name and score.";
        return;
    }

    if (!Number.isFinite(score) || score < 0 || score > 100) {
        addStudentMessage.textContent =
            "Score must be a number between 0 and 100.";
        return;
    }

    gradeTrackerStudents.push({
        name: name,
        score: score
    });

    addStudentMessage.textContent = `${name} was added successfully.`;

    studentForm.reset();
    renderStudents();
});


// ========================================
// 17. INTERACTIVE WEBPAGE CALCULATOR
// ========================================

calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstText = firstNumberInput.value.trim();
    const secondText = secondNumberInput.value.trim();

    if (firstText === "" || secondText === "") {
        calculatorResult.textContent = "Please enter both numbers.";
        return;
    }

    const first = Number(firstText);
    const second = Number(secondText);
    const operator = operatorInput.value;

    if (!Number.isFinite(first) || !Number.isFinite(second)) {
        calculatorResult.textContent = "Please enter valid numbers.";
        return;
    }

    const result = calculate(first, operator, second);

    calculatorResult.textContent = `Result: ${result}`;
});
