// arrange
const size1 = 1
const size2 = 2
const size3 = 3
const n = null
const size0 = 0
const negative = -55

function isPositiveInt(n) {
    return n % 1 === 0 && typeof(n) == "number" && n > 0 && !(typeof n === "object");
}

function largestNumber(num) {
    if(isPositiveInt(num)) {
        let res = ""
        for (let index = 0; index < num; index++) {
            res = res.concat("9")
        }
        return parseInt(res)
    } else {
        return "Not a valid argument."
    }
}

// act
console.log(isPositiveInt(n));
console.log(largestNumber(size1));
console.log(largestNumber(size2));
console.log(largestNumber(size3));
console.log(largestNumber(n));
console.log(largestNumber(size0));
console.log(largestNumber(negative));