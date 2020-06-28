// arrange
const arrayOfInts = [1, 2, 1];
const elem = 1;
const subElem = 3;

function checkArrayNotEmpty(array) {
    if (typeof array != "undefined" && array != null && array.length != null
    && array.length > 0) 
        return true
    else
        return false
}

function arrayReplace(array, elemToReplace, substitutionElem) {
    let newValue = substitutionElem;

    if(checkArrayNotEmpty(array)) {
        for (let index = 0; index < array.length; index++) {
            if(array[index] == elemToReplace) {
                array[index] = newValue
            }
        }
        return array
    }
}

// act
const result = arrayReplace(arrayOfInts, elem, subElem);
console.log(result)