// ! variables

const p1StatusBox = document.querySelector("#leftContainer .status-box");
const p2StatusBox = document.querySelector("#rightContainer .status-box");

// choice 0 = rock, 1 = paper, 2 = scissor
let p1Choice = -1;
let p2Choice = -1;

// ! functions

const player1Listener = event => {
    console.log(event.code);
    // todo find better way to listen only once
    // note {once: true} doesn't work coz it will remove listener on making invalid move
    if (event.code == "KeyA") {
        p1Choice = 0;
        document.removeEventListener("keydown", player1Listener);
        p1StatusBox.innerText = "SELECTED";
    } else if (event.code == "KeyS") {
        p1Choice = 1;
        document.removeEventListener("keydown", player1Listener);
        p1StatusBox.innerText = "SELECTED";
    } else if (event.code == "KeyD") {
        p1Choice = 2;
        document.removeEventListener("keydown", player1Listener);
        p1StatusBox.innerText = "SELECTED";
    }
    console.log(p1Choice);
    checkWin();
};

const getPlayer1Choice = () => {
    document.addEventListener("keydown", player1Listener);
};

const player2Listener = event => {
    console.log(event.code);
    if (event.code == "KeyJ") {
        p2Choice = 0;
        document.removeEventListener("keydown", player2Listener);
        p2StatusBox.innerText = "SELECTED";
    } else if (event.code == "KeyK") {
        p2Choice = 1;
        document.removeEventListener("keydown", player2Listener);
        p2StatusBox.innerText = "SELECTED";
    } else if (event.code == "KeyL") {
        p2Choice = 2;
        document.removeEventListener("keydown", player2Listener);
        p2StatusBox.innerText = "SELECTED";
    }
    console.log(p2Choice);
    checkWin();
};

const getPlayer2Choice = () => {
    document.addEventListener("keydown", player2Listener);
};

const startGame = () => {
    // reset player choice
    p1Choice = -1;
    p2Choice = -1;
    p1StatusBox.innerText = "THINKING";
    p2StatusBox.innerText = "THINKING";

    getPlayer1Choice();
    getPlayer2Choice();
};

const checkWin = () => {
    // only one player has made a move do nth
    if (p1Choice === -1 || p2Choice === -1) return;

    if (p1Choice === p2Choice) alert("draw");
    else if ((p1Choice + 1) % 3 == p2Choice) alert("P2 wins");
    else if (p1Choice == (p2Choice + 1) % 3) alert("P1 wins");
};

// ! driver code

startGame();
