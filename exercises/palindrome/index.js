// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let reversedStr = "";
//     let lowerStr = str.toLowerCase();

//     for(let length = lowerStr.length - 1; length >= 0; length--) {
//         reversedStr += lowerStr[length];
//     }
//     if(reversedStr === lowerStr ) {
//         return true; 
//     }
//     return false; 
// }

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed; 

// }

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

module.exports = palindrome;
