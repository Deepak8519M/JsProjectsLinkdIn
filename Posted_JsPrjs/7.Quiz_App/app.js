const questions = [
  {
    question: "What is the correct syntax to declare a constant in JavaScript?",
    answers: [
      { text: "let constantName;", correct: false },
      { text: "var constantName;", correct: false },
      { text: "const constantName;", correct: true },
      { text: "constant constantName;", correct: false },
    ],
  },
  {
    question: "What does the `isNaN()` function do in JavaScript?",
    answers: [
      { text: "Checks if a number is negative", correct: false },
      { text: "Checks if a value is NaN", correct: true },
      { text: "Checks if a string is empty", correct: false },
      { text: "Checks if a value is undefined", correct: false },
    ],
  },

  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "&lt;script&gt;", correct: true },
      { text: "&lt;scripting&gt;", correct: false },
      { text: "&lt;javascript&gt;", correct: false },
      { text: "&lt;js&gt;", correct: false },
    ],
  },

  {
    question: "What will `console.log(2 + '2');` print in JavaScript?",
    answers: [
      { text: "4", correct: false },
      { text: "22", correct: true },
      { text: "NaN", correct: false },
      { text: "Error", correct: false },
    ],
  },

  {
    question:
      "Which method is used to parse a string into a number in JavaScript?",
    answers: [
      { text: "parseNumber()", correct: false },
      { text: "Number()", correct: true },
      { text: "parseString()", correct: false },
      { text: "parseInt()", correct: false },
    ],
  },
  // {
  //   question: "What is the output of `typeof null` in JavaScript?",
  //   answers: [
  //     { text: "object", correct: true },
  //     { text: "null", correct: false },
  //     { text: "undefined", correct: false },
  //     { text: "string", correct: false },
  //   ],
  // },
  {
    question: "Which of these is a JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Laravel", correct: false },
      { text: "Flask", correct: false },
    ],
  },
  {
    question:
      "Which function is used to print a message to the console in JavaScript?",
    answers: [
      { text: "print()", correct: false },
      { text: "console.log()", correct: true },
      { text: "alert()", correct: false },
      { text: "log()", correct: false },
    ],
  },

  {
    question: "Which keyword is used to stop an infinite loop in JavaScript?",
    answers: [
      { text: "exit", correct: false },
      { text: "stop", correct: false },
      { text: "break", correct: true },
      { text: "end", correct: false },
    ],
  },

  {
    question: "What is the result of '5' + 3 in JavaScript?",
    answers: [
      { text: "8", correct: false },
      { text: "53", correct: true },
      { text: "15", correct: false },
      { text: "NaN", correct: false },
    ],
  },
  // {
  //   question: "What will `Boolean(0)` return in JavaScript?",
  //   answers: [
  //     { text: "true", correct: false },
  //     { text: "false", correct: true },
  //     { text: "undefined", correct: false },
  //     { text: "null", correct: false },
  //   ],
  // },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNO = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNO + "." + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  if ((score / questions.length) * 100 <= 40) {
    questionElement.innerHTML = `You Score ${score} Out of ${questions.length} | 😒 Try Well`;
  } else if ((score / questions.length) * 100 <= 70) {
    questionElement.innerHTML = `You Score ${score} Out of ${questions.length} | 😲 Better Luck Next Time`;
  } else {
    questionElement.innerHTML = `You Score ${score} Out of ${questions.length} | Excellent 😀 Did a Great Job`;
  }

  console.log((score / questions.length) * 100);
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = " block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
