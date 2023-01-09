const cellElement = document.querySelectorAll("[d-cell]");
const board = document.querySelectorAll("[d-board]");

let isCircleTurn;

const winningCombinations=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const checkForWin = (currentPlayer)=> {
  return winningCombinations.some(combination=>{
    return combination.every((i)=>{
      return cellElement[i].classList.contains(currentPlayer);
    });
  });
};

const startGame = () => {
  isCircleTurn=false;
  for (const cell of cellElement) {
    cell.addEventListener("click", handleClick,{once:true});
  }
  board.classList.add("x");
};

const endGame= (draw)=>{


}

const placeMark =(cell,classToAdd) => {
  cell.classList.add(classToAdd);
};

const swapTurns = ()=>{
  isCircleTurn =!isCircleTurn;

  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const handleClick=(e)=>{
  const cell =e.target;
  const classToAdd=isCircleTurn ? "circle" : "x";
  placeMark(cell,classToAdd);

  const isWin = checkForWin(classToAdd);
  if(isWin){
    console.log("winner");
  }


  swapTurns();
};

  for (const cell of cellElement){
    cell.addEventListener("click", handleClick,{once:true});
  };

startGame();



