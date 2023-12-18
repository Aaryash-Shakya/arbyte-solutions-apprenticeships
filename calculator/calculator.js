// ! variables

const keyAC = document.getElementById("key_AC");
const keyPlusMinus = document.getElementById("key_plus-minus");
const keyPercentage = document.getElementById("key_percentage");
const keyDivide = document.getElementById("key_divide");
const keyMultiply = document.getElementById("key_multiply");
const keyMinus = document.getElementById("key_minus");
const keyPlus = document.getElementById("key_plus");
const keyEquals = document.getElementById("key_equals");
const keyDecimal = document.getElementById("key_decimal");
const key0 = document.getElementById("key_0");
const key1 = document.getElementById("key_1");
const key2 = document.getElementById("key_2");
const key3 = document.getElementById("key_3");
const key4 = document.getElementById("key_4");
const key5 = document.getElementById("key_5");
const key6 = document.getElementById("key_6");
const key7 = document.getElementById("key_7");
const key8 = document.getElementById("key_8");
const key9 = document.getElementById("key_9");
let input = document.getElementById("input");
let result = document.getElementById("result");

let inputString = "";
let resultString = "0";
const numberAndDot = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "*", "/"];
let operatorExists = false;

// ! functions

// update text on screen
const updateScreen = () => {
    input.innerText = inputString;
    result.innerText = resultString;
};

const concatenateToInput = value => {
    inputString += value;
    updateScreen();
};

const handleOperators = sign => {
    // if blank
    if (inputString === "") return;

    // if last digit operator replace it
    lastDigit = inputString.split("").pop();
    if (operators.includes(lastDigit)) {
        inputString = inputString.slice(0, -1);
        concatenateToInput(sign);
        return;
    }

    // if operator already used
    if (operatorExists) {
        console.log("Only one operator per equation");
        return;
    }

    operatorExists = true;
    concatenateToInput(sign);
};

// add click event listener
const handleClick = () => {
    // reset
    keyAC.onclick = () => {
        inputString = "";
        resultString = "0";
        operatorExists = false;
        updateScreen();
    };

    // handle all numbers
    for (i = 0; i <= 9; i++) {
        const temp = document.getElementById(`key_${i}`);

        // todo there probably exists a better way to do this
        temp.onclick = () => {
            // using i will always get 10
            const number = temp.id.slice(4);
            concatenateToInput(number);
        };
    }

    // arithmetic operators
    keyPlus.onclick = () => {
        handleOperators("+");
    };
    keyMinus.onclick = () => {
        handleOperators("-");
    };
    keyMultiply.onclick = () => {
        handleOperators("*");
    };
    keyDivide.onclick = () => {
        handleOperators("/");
    };
    keyPercentage.onclick = () => {
        concatenateToInput("%");
    };

    // equals to
    keyEquals.onclick = () => {
        // const regex = /(\d+(\.\d+)?)?([+\-x/])(\d+(\.\d+)?)/g;
        // const regex = /([+\-*/])|\b(\d+(\.\d+)?)\b/g;
        // const matches = inputString.match(regex);

        // inputString.replace(/%/g,'/100')
        // console.log(inputString);
        resultString = eval(inputString)
        console.log(resultString);
        updateScreen();
    };
};

// ! driver code

handleClick();
