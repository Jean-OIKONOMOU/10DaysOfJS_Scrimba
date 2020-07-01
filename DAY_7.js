// arrange
const firstFact = 2
const secondFact = 5
const test = "wrongArg"
const nullTest = 0
const float = 5.23

function isInt(n) {
    return n % 1 === 0 && typeof(n) == "number";
}

function factorial(int) {
    let sum = 1
    if(isInt(int)) {
        for (let index = int; index > 0; index--) {
            sum *= index
        }
        return sum
    } else {
        return "Not a whole integer.";
    }
}

// act
console.log(factorial(firstFact));
console.log(factorial(secondFact));
console.log(factorial(test));
console.log(factorial(nullTest));
console.log(factorial(float));