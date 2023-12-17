const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
let xTurn = 0;

// clear all marks
const clearMark = cell => {
    cell.classList.remove("circle");
    cell.classList.remove("hover-circle");
    cell.classList.remove("cross");
    cell.classList.remove("hover-cross");
};

// show translucent mark on hover for each cell
const handleHover = cell => {
    // when mouse enter a cell if x's turn then add .hover-cross, else add.hover-circle
    cell.addEventListener("mouseenter", () => {
        cell.classList.add(xTurn ? "hover-cross" : "hover-circle");
    });
    // when mouse leave a cell if x's turn then remove .hover-cross, else remove.hover-circle
    cell.addEventListener("mouseleave", () => {
        cell.classList.remove(xTurn ? "hover-cross" : "hover-circle");
    });
};

const handleClick = cell => {
    // when mouse clicks a cell if x's turn then add .cross, else add .circle
    cell.addEventListener("click", () => {
        cell.classList.add(xTurn ? "cross" : "circle");

        // swap turn
        xTurn = xTurn ? false : true;
    },{once:true});
};

const startGame = () => {
    // reset the board by clearing all mark
    cells.forEach(cell => clearMark(cell));

    // add hover event listener
    cells.forEach(cell => handleHover(cell));

    // add click event listener
    cells.forEach(cell=> handleClick(cell))
};

startGame();
