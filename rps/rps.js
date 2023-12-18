// ! variables

const p1StatusBox = document.querySelector("#leftContainer .status-box");
const p2StatusBox = document.querySelector("#rightContainer .status-box");
const p1ScoreBox = document.getElementById("p1Score");
const p2ScoreBox = document.getElementById("p2Score");
const p1Options = document.querySelectorAll("#leftContainer .keyboard-key");
const p2Options = document.querySelectorAll("#rightContainer .keyboard-key");
const opponentToggleButton = document.getElementById("opponentToggleButton");
const opponent = document.getElementById("opponent");

// choice 0 = rock, 1 = paper, 2 = scissor
let p1Choice = -1;
let p2Choice = -1;
let pvp = true; // default

// ! functions

opponentToggleButton.onclick = () => {
    if (pvp) {
        opponent.innerText = "PVC";
        pvp = false;
    } else {
        opponent.innerText = "PVP";
        pvp = true;
    }
    // restart game
    startGame();
};

const player1Listener = event => {
    // console.log(event.code);
    // todo find better way to listen only once
    // note {once: true} doesn't work coz it will remove listener on making invalid move
    if (event.code == "KeyA") {
        p1Choice = 0;
        document.removeEventListener("keydown", player1Listener);
        p1StatusBox.innerText = "✅ SELECTED";
    } else if (event.code == "KeyS") {
        p1Choice = 1;
        document.removeEventListener("keydown", player1Listener);
        p1StatusBox.innerText = "✅ SELECTED";
    } else if (event.code == "KeyD") {
        p1Choice = 2;
        document.removeEventListener("keydown", player1Listener);
        p1StatusBox.innerText = "✅ SELECTED";
    }
    console.log(p1Choice);
    checkWin();
};

const getPlayer1Choice = () => {
    document.addEventListener("keydown", player1Listener);
};

const player2Listener = event => {
    if (event.code == "KeyJ") {
        p2Choice = 0;
        document.removeEventListener("keydown", player2Listener);
        p2StatusBox.innerText = "✅ SELECTED";
    } else if (event.code == "KeyK") {
        p2Choice = 1;
        document.removeEventListener("keydown", player2Listener);
        p2StatusBox.innerText = "✅ SELECTED";
    } else if (event.code == "KeyL") {
        p2Choice = 2;
        document.removeEventListener("keydown", player2Listener);
        p2StatusBox.innerText = "✅ SELECTED";
    }
    console.log(p2Choice);
    checkWin();
};

const getPlayer2Choice = () => {
    document.addEventListener("keydown", player2Listener);
};

const getComputerChoice = () => {
    // add random delay to make it look natural
    // range 400-1499 ms
    randomDelay = Math.floor(Math.random() * 1100) + 400;
    setTimeout(() => {
        p2Choice = Math.floor(Math.random() * 3);
        p2StatusBox.innerText = "✅ SELECTED";
        console.log(p2Choice);
        // incase user makes first move prevent stall
        checkWin();
    }, randomDelay);
};

const startGame = () => {
    // reset player choice
    p1Choice = -1;
    p2Choice = -1;
    p1StatusBox.innerText = "🤔 THINKING";
    p2StatusBox.innerText = "🤔 THINKING";

    getPlayer1Choice();
    if (pvp) {
        getPlayer2Choice();
    } else {
        getComputerChoice();
    }
};

const displayResult = () => {
    p1Options[p1Choice].style.backgroundColor = "#28a745";
    p2Options[p2Choice].style.backgroundColor = "#28a745";
};

const hideResult = () => {
    p1Options[p1Choice].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    p2Options[p2Choice].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    p2Options.forEach(option => {
        option.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
};

const checkWin = () => {
    // only one player has made a move do nth
    if (p1Choice === -1 || p2Choice === -1) return;

    if (p1Choice === p2Choice) handleWin("draw");
    else if ((p1Choice + 1) % 3 == p2Choice) handleWin("P2");
    else if (p1Choice == (p2Choice + 1) % 3) handleWin("P1");
};

const handleWin = state => {
    if (state == "draw") {
        console.log("draw");
    } else if (state == "P1") {
        console.log("p1 win");
        p1ScoreBox.innerText = Number(p1ScoreBox.innerText) + 1;
    } else if (state == "P2") {
        console.log("p2 win");
        p2ScoreBox.innerText = Number(p2ScoreBox.innerText) + 1;
    }
    displayResult();
    setTimeout(() => {
        hideResult();
        startGame();
    }, 1200);
};

// ! driver code

startGame();
