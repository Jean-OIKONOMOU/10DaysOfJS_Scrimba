// arrange
const testString = "aAbbAaa";


function isStringSuitable(str) {
    return str.length < 13
}

function caseInsensitivePalindrome(str) {
    let arg = str.toLowerCase();
    let palindrome;

    if (isStringSuitable(testString)) {
        let words = arg.split('');
        let reverse = [];
        
        for (let index = words.length; index >= 0; index--) {
            reverse.push(words[index])
        }
        palindrome = reverse.join('');
    } else {
        palindrome = "String unsuitable."
    }

    console.log(palindrome, arg)

    return palindrome == arg
}

// act
const res = caseInsensitivePalindrome(testString)

// log
console.log(res)
