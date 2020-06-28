// First Scrimba JS challenge / 10
// the goal here is to create a function that just adds two numbers. 
// Afterwards, the goal is to create a function that adds together any number of parameters.

function add(param1, param2) {
    return param1 + param2;
}

function multiAdd(...theArgs) {
    let sum = 0

    for (const element of theArgs) {
        sum += element
    }

    return sum;
}

console.log(add(1,2))
console.log(multiAdd(1, 2, 3, 4, 5))