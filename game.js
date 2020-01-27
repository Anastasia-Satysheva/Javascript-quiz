const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const startButton = document.getElementById('start-btn')
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = -1;
let availableQuesions = [];

let questions = [
  {
    question: "How to write an IF statement in JavaScript?",
    choice1: "if i == 5 then",
    choice2: "if i = 5",
    choice3: "if (i == 5) ",
    choice4: "if i = 5 then",
    answer: 3
  },
  {
    question:
      "How do you round the number 7.25, to the nearest integer?",
    choice1: "rnd(7.25)",
    choice2: "round(7.25)",
    choice3: "Math.round(7.25)",
    choice4: "Math.rnd(7.25)",
    answer: 3
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    choice1: "Math.max(x, y) ",
    choice2: "top(x, y)",
    choice3: "ceil(x, y)",
    choice4: "Math.ceil(x, y)",
    answer: 1
  },
  {
    question:
      "Which operator is used to assign a value to a variable?",
    choice1: "-",
    choice2: "=",
    choice3: "*",
    choice4: "x",
    answer: 2
  },
  {
    question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
    choice1: "if i <> 5",
    choice2: "if i =! 5 then",
    choice3: "if (i != 5) ",
    choice4: "if (i <> 5)",
    answer: 3
  }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

  var sec = 60;
  function startTimer(){
      console.log('timer suppose to go')
      var timer = setInterval(function(){
          sec--;
          document.getElementById('timerDisplay').innerHTML='00:'+sec;
          if (sec < 0) {
              clearInterval(timer);
              window.location.href='end.html'
          }
      }, 1000);
  }
  startTimer();
;

startGame = () => {
  questionCounter = -1;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("result.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
      };

if (classToApply === "incorrect") {
    sec -= 8;
};

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});


incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
