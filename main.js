function clearCalculator() {
    previousNum = "";
    currentNum = "";
    operator = "";
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = "0";
}

function clearCalculator() {
    previousNum = "";
    currentNum = "";
    operator = "";
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = "0";
}

function handleNumber(num){
    if(currentNum.length <= 11){
        currentNum += num;
        currentDisplayNumber.textContent = currentNum;
    }
}

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNumber.textContent = "";
}

// function to add decimal
function addDecimal() {
    if (!currentNum.includes(".")){
        currentNum = currentNum + ".";
        //update display
        currentDisplayNumber.textContent = currentNum;
    }
}

function calculate() {
    //convert our string values to numbers in order to do mathematical operations
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === '+'){
        previousNum += currentNum;
    } else if (operator === '-') {
        previousNum -= currentNum;
    } else if (operator === 'x') {
        previousNum *= currentNum;
    } else if (operator === '/') {
        if (currentNum <= 0){
            previousNum = "Error";
            displayResults();
            return;
        }
        previousNum /= currentNum;
    }
    // rounds the number values
    previousNum = roundNumber(previousNum);
    //convert number values we converted originally back to strings
    previousNum = previousNum.toString();
    displayResults();
}


//function that rounds our numbers to the 6th decimal
function roundNumber (num) {
    return Math.round(num * 100000) / 100000;
}

//function that displays results within calculator screen
function displayResults(){
    previousDisplayNumber.textContent = "";
    operator = "";
    if (previousNum.length <= 11) {
        currentDisplayNumber.textContent = previousNum;
    } else {
        currentDisplayNumber.textContent = previousNum.slice(0, 11) + "...";
    } 
}

// calculator screen
let operator = "";
let currentNum = "";
let previousNum = "";

let currentDisplayNumber = document.querySelector(".current");
let previousDisplayNumber = document.querySelector(".previous");

// buttons
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".delete");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");


// event listener for clear button
// when C button is clicked, fires clearCalculator function
clear.addEventListener("click", clearCalculator);

//event listener for number buttons
numbers.forEach((number) => {
    number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent);
    });
});

// event listener for operator buttons
operators.forEach((operator) => {
    operator.addEventListener("click", function(e) {
        handleOperator(e.target.textContent);
    });
});

//event listener for decimal button
decimal.addEventListener("click", () => {
    addDecimal();
});

// event listener for equal button
// when = button is clicked it checks to see if there is a previous and current number entered
// if yes, then calls the calculate function to perform the mathematical calculations
equal.addEventListener("click", () => {
    if (currentNum !== "" && previousNum !== "") {
        calculate();
        
    }
});