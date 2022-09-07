// function for addition
function addFunction(a, b) {
    return a + b;
}
console.log(addFunction(5, 5));

// function for subtraction
function minusFunction(a, b) {
    return a - b;
}
console.log(minusFunction(10, 5));

// function for multiplication
function multiplyFunction(a, b) {
    return a * b;
}
console.log(multiplyFunction(10, 10));

// function for division
function divideFunction(a, b) {
    return a / b;
}
console.log(divideFunction(50, 2));

// function for operate
function operateFunction(operator, a, b) {
    if(operator === '+') {
        return addFunction(a, b);
    } else if(operator === '-') {
        return minusFunction(a, b);
    } else if(operator === '/') {
        return divideFunction(a, b);
    } else if(operator === '*') {
        return multiplyFunction(a, b);
    } else {
        return "Invalid Operator"
    }
};
console.log(operateFunction("-", 10, 10));