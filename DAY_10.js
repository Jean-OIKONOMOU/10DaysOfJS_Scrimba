// arrange 
const divisor1 = 3;
const divisor2 = 5;
const divisor3 = 7;

const bound1 = 12;
const bound2 = 152;
const bound3 = 8;

const error1 = 0;
const error2 = null;
const error3 = -5;

function isPositiveInt(n) {
    return n % 1 === 0 && typeof(n) == "number" && n > 0 && !(typeof n === "object");
}

function arePositiveInt(int1, int2) {
    return isPositiveInt(int1) && isPositiveInt(int2);
}

function divisorMultipleOfBound(divisor, bound) {
    return bound%divisor == 0;
}

function maxMultiple(divisor, bound) {
    let res;
    
    if (arePositiveInt(divisor, bound) ) {
        if (divisorMultipleOfBound(divisor, bound)) {
            return bound;
        } else {
            for (let index = 0; index < bound; index++) {
                if (index%divisor == 0) {
                    res = index
                }
            }
            return res;
        }
    } else {
        return "Invalid arguments provided.";
    }
    
}


// act
console.log(arePositiveInt(divisor1, bound1));
console.log(arePositiveInt(divisor1, error1));
console.log(maxMultiple(divisor1, bound1));
console.log(maxMultiple(divisor2, bound2));
console.log(maxMultiple(divisor3, bound3));
console.log(maxMultiple(divisor1, bound2));
console.log(maxMultiple(divisor2, bound1));