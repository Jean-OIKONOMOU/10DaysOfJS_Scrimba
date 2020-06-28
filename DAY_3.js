const numbers = [50, 60, 60, 45, 75, 88, 70, 72, 42]

function checkArrayNotEmpty(array) {
    if (typeof array != "undefined" && array != null && array.length != null
    && array.length > 0) 
        return true
    else
        return false
}

function isEvenNumber(aNumber) {
    return aNumber%2==0;
}

// function isOddNumber(aNumber) {
//     return aNumber%2!=0;
// }

function alternatingSums(numbersArray) {
    let sumEvens = 0;
    let sumOdds = 0;
    const res = [];

    if (checkArrayNotEmpty(numbersArray))
    for (let index = 0; index < numbersArray.length; index++) {
        const element = numbersArray[index];
        if (isEvenNumber(index)) {
            sumEvens += numbersArray[index]
        } else {
            sumOdds += numbersArray[index]
        }
    }
    res.push(sumEvens)
    res.push(sumOdds)
    return res;
}

// act
const answer = alternatingSums(numbers)

for (let index = 0; index < answer.length; index++) {
    const element = answer[index];
    console.log(element)
}