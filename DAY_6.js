// arrange
const str = "avada kedava"
const int = 6
const float = 6.2

function encloseInBrackets(str) {
    return "(" + str + ")";
}

// act
console.log(encloseInBrackets(str));
console.log(encloseInBrackets(int));
console.log(encloseInBrackets(float));