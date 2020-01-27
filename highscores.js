const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const button = document.querySelector('button')
highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
  
  $("#1").on("click", function() {
    $("#highScoresList").empty();
    localStorage.clear();
    });