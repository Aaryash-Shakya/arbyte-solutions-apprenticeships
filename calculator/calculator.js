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

// ! functions

// update text on screen
const updateScreen = () => {
    input.innerText = inputString;
    result.innerText = resultString;
};

// add click event listener
const handleClick = ()=>{
    // reset
    keyAC.onclick = () => {
        inputString = "";
        resultString = "0";
        updateScreen();
    };
    
    // handle all numbers
    for(i=0;i<=9;i++){
        const temp = document.getElementById(`key_${i}`)
        temp.onclick=()=>{
            // using i will always get 10
            const number = temp.id.slice(4);
            console.log(number)
            inputString+=number
            console.log(inputString);
            updateScreen()
        }
    }
}


// ! driver code

handleClick()
