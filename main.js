const cellElement = document.querySelectorAll("[d-cell]");
const board = document.querySelectorAll("[d-board]");
const winMessage = document.querySelector("[win-msg]");
const winMsgText = document.querySelector("[dt-win-msg-text]");
let isCircleTurn;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((i) => {
      return cellElement[i].classList.contains(currentPlayer);
    });
  });
};

const startGame = () => {
  isCircleTurn = false;
  for (const cell of cellElement) {
    cell.addEventListener("click", handleClick, { once: true });
  }
  board.classList.add("x");
};

const endGame = () => {
  for (const cell of cellElement) {
    cell.classList.remove("x", "circle");
    cell.removeEventListener("click", handleClick);
  }
  winMessage.style.display = "none";
  startGame();
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;

  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const handleClick = (e) => {
  const cell = e.target;
  const classToAdd = isCircleTurn ? "circle" : "x";
  placeMark(cell, classToAdd);

  const isWin = checkForWin(classToAdd);

  turns = isCircleTurn ? "Círculo" : "X";

  if (isWin) {
    winMessage.style.display = "flex";
    winMsgText.textContent = `${turns} venceu!`;
  } else {
    checkForDraw();
  }
  swapTurns();
};

const checkForDraw = () => {
  const isDraw = [...cellElement].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });

  if (isDraw) {
    winMessage.style.display = "flex";
    winMsgText.textContent = "O jogo terminou em empate!";
  }
};

for (const cell of cellElement) {
  cell.addEventListener("click", handleClick, { once: true });
}

startGame();
