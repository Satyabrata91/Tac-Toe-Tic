const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset_button");
const newGameBtn = document.querySelector("#new_button");
const msgContainer = document.querySelector("#satyabrata");
const msg = document.querySelector("#massage");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

const showWinner = (winner) => {
  msg.innerText = `🎉🎉🎉\nCongratulation \n '${winner}' Won The match\n🎉🎉🎉`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [ab, bc, ca] = pattern;
    let val1 = boxes[ab].innerText;
    let val2 = boxes[bc].innerText;
    let val3 = boxes[ca].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return;
    }
  }

  if ([...boxes].every((box) => box.innerText !== "")) {
    msg.innerText = `It's a Draw match`;
    msgContainer.classList.remove("hide");
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
