var timer = 24;
var score = 0;
var hitRn = 0;

function makeBubble() {
  var clutter = "";
  for (var i = 0; i <= 112; i++) {
    var rand = Math.floor(Math.random() * 10) + 1;
    clutter += `<div class="bubble">${rand}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over | Your Score : ${score}</h1>`;
      clearInterval(time);
    }
  }, 1000);
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10) + 1;
  document.querySelector("#hitVal").textContent = hitRn;
}

function incScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitRn) {
    incScore();
    getNewHit();
    makeBubble();
  } else if (clickedNum !== hitRn) {
    score -= 10;
    document.querySelector("#scoreVal").textContent = score;
  }
});

makeBubble();
runTimer();
getNewHit();
