const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll(".option");
const quizContainer = document.querySelector(".quiz-container");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score-value");
const finalScoreElement = document.getElementById("final-score");
const finalScoreValueElement = document.getElementById("final-score-value");

let currentQuestionIndex = 0;
let timeLeft = 30;
let timerInterval;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Berlin", "Rome"],
    answer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
];

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerElement.textContent = `Time left: ${timeLeft} seconds`;
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    checkAnswer(-1); // Timeout, checkAnswer with an incorrect index
  }
}

function updateScore() {
  score++;
  scoreElement.textContent = score;
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionElements.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
    option.addEventListener("click", () => checkAnswer(index));
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  // Rest of the checkAnswer logic

  setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
  optionElements.forEach((option) => {
    option.style.backgroundColor = "#fff";
  });
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    resetTimer();
  } else {
    clearInterval(timerInterval); // Clear the timer when quiz is completed
    showFinalScore();
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  timerElement.textContent = `Time left: ${timeLeft} seconds`;
  startTimer();
}

function showFinalScore() {
  quizContainer.style.display = "none";
  finalScoreElement.style.display = "block";
  finalScoreValueElement.textContent = score;
}

loadQuestion();
startTimer();
