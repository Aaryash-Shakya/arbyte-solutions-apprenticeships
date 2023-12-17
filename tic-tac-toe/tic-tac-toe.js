const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
let xTurn = 0;
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
            cell.classList.add(xTurn ? "cross" : "circle");

            // check win
            let currentClass = xTurn ? "cross" : "circle";
            if (checkWin(currentClass)) {
                console.log(`${currentClass} Wins`);
            }

            // swap turn
            xTurn = xTurn ? false : true;
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

const startGame = () => {
    // reset the board by clearing all mark
    resetBoard();

    // add hover event listener
    cells.forEach(cell => handleHover(cell));

    // add click event listener
    cells.forEach(cell => handleClick(cell));
};

startGame();
