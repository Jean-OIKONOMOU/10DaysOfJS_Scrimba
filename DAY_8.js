// arrange
const str1 = "gg9e"
const str2 = "eru5r6"
const str3 = "2fozhi"
const str4 = "-----"
const str5 = ""

function isString(str) {
    return typeof(str) == "string" && str.length > 0
}

function firstDigit(str) {
    if (isString(str)) {
        const strArray = str.split('');
        for (let index = 0; index < strArray.length; index++) {
            const element = strArray[index];
            for (let index = 0; index < 10; index++) {
                if (element.includes(index)) {
                    return element
                }
            }
        }
        return false
    } else {
        return "Invalid argument."
    }
}

// act
console.log(firstDigit(str1));
console.log(firstDigit(str2));
console.log(firstDigit(str3));
console.log(firstDigit(str4));
console.log(firstDigit(str5));