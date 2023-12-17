// ! variables

const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
/*
|  0  1  2  |
|  3  4  5  |
|  6  7  8  |
3 in a row = [0,1,2],[3,4,5],[6,7,8]
3 in a column = [0,3,6],[1,4,7],[2,5,8]
3 in a diagonal = [0,4,8],[2,4,6]
*/
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const messageBox = document.getElementById("messageBox");
const gameMessage = document.getElementById("gameMessage");
const restartBtn = document.getElementById("restartBtn");
// to handle turn and score
const xScore = document.querySelector("#xScore");
const oScore = document.querySelector("#oScore");
const currentTurn = document.querySelector("#currentTurn");

let xTurn = 0;
let moveCount = 0;

// ! functions

// clear all marks
const resetBoard = () => {
    cells.forEach(cell => {
        cell.classList.remove("circle");
        cell.classList.remove("hover-circle");
        cell.classList.remove("cross");
        cell.classList.remove("hover-cross");
    });
};

// show translucent mark on hover for each cell
const handleHover = cell => {
    // when mouse enter a cell if x's turn then add .hover-cross, else add.hover-circle
    cell.addEventListener("mouseenter", () => {
        // if cell already has mark, don't show hover
        if (cell.classList.contains("cross") || cell.classList.contains("circle")) {
            console.log("cant hover over mark");
            return;
        }
        cell.classList.add(xTurn ? "hover-cross" : "hover-circle");
    });
    // when mouse leave a cell if x's turn then remove .hover-cross, else remove.hover-circle
    cell.addEventListener("mouseleave", () => {
        cell.classList.remove(xTurn ? "hover-cross" : "hover-circle");
    });
};

// add mark to cell onclick
const handleClick = cell => {
    // when mouse clicks a cell if x's turn then add .cross, else add .circle
    cell.addEventListener(
        "click",
        () => {
            // if cell already has mark, exit
            if (cell.classList.contains("cross") || cell.classList.contains("circle")) {
                console.log("cant click twice");
                return;
            }
            moveCount++;
            cell.classList.add(xTurn ? "cross" : "circle");

            // check win
            let currentClass = xTurn ? "cross" : "circle";
            if (checkWin(currentClass)) {
                console.log(`${currentClass} Wins`);
                handleGameEnd(currentClass);
            }

            // check if board is full
            else if (moveCount >= 9) {
                console.log("draw");
                handleGameEnd("full");
            }

            // swap turn
            xTurn = xTurn ? false : true;

            // update turn
            currentTurn.innerText = xTurn ? "X" : "O";
        },
        { once: true }
    );
};

// check if winning condition is satisfied
const checkWin = currentClass => {
    // return true if at least one combo array in winningCombination is true
    return winningCombination.some(combo => {
        // return true if all 3 index in combo array is true
        return combo.every(index => {
            // return true if the index has the currentClass
            return cells[index].classList.contains(currentClass);
        });
    });
};

// if someone wins display msg, increment score and reset
const handleGameEnd = currentClass => {
    messageBox.style.display = "flex";
    if (currentClass === "cross") {
        gameMessage.innerHTML = "X Wins";
        // update score of x
        xScore.innerText = Number(xScore.innerText) + 1;
    }
    if (currentClass === "circle") {
        gameMessage.innerHTML = "O Wins";
        // update score of o
        oScore.innerText = Number(oScore.innerText) + 1;
    } else if (currentClass === "full") {
        gameMessage.innerHTML = "out of moves<br>DRAW";
    }
};

// reset button is shown after game ends and msg is shown
restartBtn.onclick = () => {
    messageBox.style.display = "none";
    startGame();
};

const startGame = () => {
    // reset the board by clearing all mark
    resetBoard();

    // reset moves
    moveCount = 0;

    // add hover event listener
    cells.forEach(cell => handleHover(cell));

    // add click event listener
    cells.forEach(cell => handleClick(cell));
};

// ! driver code

startGame();
