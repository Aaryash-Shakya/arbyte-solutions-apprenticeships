const board = document.getElementById('board')
const cells = document.querySelectorAll('.cell')
let xTurn = 0

// clear all marks
const clearMark = cell => {
    cell.classList.remove('circle')
    cell.classList.remove('hover-circle')
    cell.classList.remove('cross')
    cell.classList.remove('hover-cross')
}

// show translucent mark on hover for each cell
const hoverEffect = cell => {
    // when mouse enter a cell if x's turn then add .hover-cross, else add.hover-circle
    cell.addEventListener('mouseenter',()=>{
        cell.classList.add(xTurn?'hover-cross':'hover-circle')
    })
    // when mouse leave a cell if x's turn then remove .hover-cross, else remove.hover-circle
    cell.addEventListener('mouseleave',()=>{
        cell.classList.remove(xTurn?'hover-cross':'hover-circle')
    })
}

const startGame = () => {
    // reset the board by clearing all mark
    cells.forEach(cell => clearMark(cell))

    // add hover event listener
    cells.forEach(c=>hoverEffect(c))
}

startGame()