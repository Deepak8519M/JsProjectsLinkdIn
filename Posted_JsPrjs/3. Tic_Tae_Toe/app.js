let boxes = document.querySelectorAll(".boxes");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg");
let span = document.querySelector("#result");

let reset = document.getElementById("reset");
let ng = document.getElementById("ng");

let clickSound = new Audio("click.mp3");

let winnerSound = new Audio("winner.mp3");

let turnX = true;
let winnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.add("hover");
    box.classList.remove("hide");
    box.classList.remove("bs");
  });
});
ng.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.add("hover");
    box.classList.remove("hide");
    box.classList.remove("bs");
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    clickSound.play();
    if (turnX == true) {
      box.innerText = "X";
      box.style.color = "rgb(201, 51, 64)";
      turn2.classList.add("bs");
      turn1.classList.remove("bs");
      turnX = false;
    } else {
      box.innerText = "O";
      box.style.color = "rgb(83, 38, 207)";
      turn1.classList.add("bs");
      turn2.classList.remove("bs");
      turnX = true;
    }
    checkWinner();
  });
});

function checkWinner() {
  for (let condition of winnerCondition) {
    let box1 = boxes[condition[0]].innerText;
    let box2 = boxes[condition[1]].innerText;
    let box3 = boxes[condition[2]].innerText;
    if (box1 !== "" && (box2 != "" * box3) != "") {
      if (box1 == box2 && box2 == box3) {
        showResult(box1);
        winnerSound.play();
        boxes.forEach((box) => {
          box.classList.add("bs");
        });
        boxes[condition[0]].classList.remove("bs");
        boxes[condition[1]].classList.remove("bs");
        boxes[condition[2]].classList.remove("bs");
      }
    }
  }
}

function showResult(result) {
  boxes.forEach((box) => {
    box.disabled = true;
    box.classList.remove("hover");
  });
  msg.classList.remove("hide");
  span.innerText = result;
  if (result == "X") {
    span.style.color = "rgb(201, 51, 64)";
  } else {
    span.style.color = "rgb(83, 38, 207)";
  }
}
