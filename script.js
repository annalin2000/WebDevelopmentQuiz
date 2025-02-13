// Const quizData with array of objects to store questions and answers
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler"
    ],
    correct: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Compact Style Syntax"
    ],
    correct: 1,
  },
  {
    question: "What is the purpose of the <head> section in an HTML document?",
    options: [
      "To contain the main content of the page",
      "To define styles and metadata for the document",
      "To display visible content to the user",
      "To include navigation links"
    ],
    correct: 1,
  },
{
    question: "What does the term 'DOM' stand for in web development?",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Display Output Module",
      "Dynamic Object Model"
    ],
    correct: 1,
  },
{
    question: "Which of the following is NOT a valid CSS property?",
    options: [
      "Color",
      "Font-size",
      "Background-image",
      "Text-gradient"
    ],
    correct: 3,
  },
{
    question: "Who invented JavaScript?",
    options: [
      "Brendan Eich",
      "Tim Berners-Lee",
      "James Gosling",
      "Bjarne Stroustrup"
    ],
    correct: 0,
  },
{
    question: "In which year was JavaScript created?",
    options: [
      "1990",
      "1993",
      "1995",
      "2000"
    ],
    correct: 2,
  },
];

// getElementById connects html to javascript
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultsEl = document.getElementById("results");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Variables
let currentQuestion = 0;
let score = 0;

// Display Question
function displayQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  answersEl.innerHTML = "";
// displayQuestion function retrieves the current question and answer options from quizData
  
  currentQuiz.options.forEach(function(option, index) {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = function() {
      checkAnswer(index);
    };
    answersEl.appendChild(li);
  });
}
// Each answer option is clickable and when an answer is chosen, the checkAnswer function validates it by comparing the user’s selection with the correct answer.

// Check Answer
function checkAnswer(selectedIndex) {
  const currentQuiz = quizData[currentQuestion];
  if (selectedIndex === currentQuiz.correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Incorrect. Try the next question.");
  }
  nextBtn.classList.remove("hidden");
}

// Correct answers increase the score and display an alert, incorrect responses prompt an encouraging message. 


// Handle Next Button
nextBtn.addEventListener("click", function() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
    nextBtn.classList.add("hidden");
  } else {
    showResults();
  }
});
// After the user selected an answer, the "Next Question" button becomes visible.

// Show Results
function showResults() {
  resultsEl.classList.remove("hidden");
  document.getElementById("main-quiz").classList.add("hidden");

  if (score === quizData.length) {
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}! You mastered this quiz! 🎉`;
  } else {
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}. Keep practicing! 💪`;
  }
}

// showResults function displays total score and performance. 

// Restart Quiz
restartBtn.addEventListener("click", function() {
  score = 0;
  currentQuestion = 0;
  resultsEl.classList.add("hidden");
  document.getElementById("main-quiz").classList.remove("hidden");
  displayQuestion();
});

// Restart button using addEventListener to restart the quiz

// Initialize Quiz
displayQuestion();

