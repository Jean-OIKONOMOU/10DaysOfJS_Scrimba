const strings = ["aba", "a", "aa", "ad", "aa", "vcd", "aba", "a"];

function checkArrayEmpty(stringArray) {
    if (typeof stringArray != "undefined" && stringArray != null && stringArray.length != null
    && stringArray.length > 0) 
        return true
    else
        return false
}

function findLongestString(stringArray) {
    let longest = stringArray[0];;

    for (let index = 0; index < stringArray.length; index++) {
        if (longest < stringArray[index].length)
        longest = stringArray[index]
    }
    return longest.length;
}

function allLongestStrings(stringArray) {
    let longest = findLongestString(stringArray);
    const arrayOfLongest = [];

    if (checkArrayEmpty(stringArray))
        for (let index = 0; index < stringArray.length; index++) {
            if (stringArray[index].length >= longest)
                arrayOfLongest.push(stringArray[index])
        }
        return arrayOfLongest
}

        
// act
const resultx = allLongestStrings(strings);

for (let index = 0; index < resultx.length; index++) {
    const element = resultx[index];
    console.log(element)
}