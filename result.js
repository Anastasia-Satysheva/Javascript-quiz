  
const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreButton.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};