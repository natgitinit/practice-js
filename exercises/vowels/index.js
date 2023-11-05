// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const countVowels = 'aeiouAEIOU';

//     if(str.length === 0) {
//         return 0; 
//     } else {
//         if (countVowels.indexOf(str[0]) != -1) {
//             return 1 + vowels(str.slice(1))
//         } else {
//             return vowels(str.slice(1))
//         }
//     }
// }

function vowels(str) {
    let count = 0;
    const checkVowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        // helper method .include()
        if(checkVowels.includes(char)) {
            count++;
        }
    }

    return count; 
}

//*********************** concise match function */
// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     //match returns null if falsey value
//     return matches ? matches.length : 0;
// }

// function vowels(str) {
//     let vowelsCount = 0; 

//     for (let char in str ) {
//         if (str.charAt(char) === 'a' || str.charAt(char) === 'e' || str.charAt(char) === 'i' || str.charAt(char) === 'o' || str.charAt(char) === 'u') {
//             vowelsCount += 1; 
//         }
//     }
//     return vowelsCount; 
// }



module.exports = vowels;
