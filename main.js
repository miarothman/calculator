// calculator screen
let operator = "";
let currentNum = "";
let previousNum = "";

let currentDisplayNumber = document.querySelector(".current");
let previousDisplayNumber = document.querySelector(".previous");

// buttons
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

// event listener for clear button
clear.addEventListener("click", function() {
    previousNum = "";
    currentNum = "";
    operator = "";
    previousDisplayNumber.textContent = currentNum;
    currentDisplayNumber.textContent = currentNum;
})

//event listener for number buttons
numbers.forEach((number) => {
    number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(num){
    if(currentNum.length <= 11){
        currentNum += num;
        currentDisplayNumber.textContent = currentNum;
    }
}

// event listener for operator buttons
operators.forEach((operator) => {
    operator.addEventListener("click", function(e) {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNumber.textContent = "";
}

// event listener for equal button
// when = button is clicked it calls the calculate function
equal.addEventListener("click", calculate);

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
        previousNum /= currentNum;
    };
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = previousNum;
}