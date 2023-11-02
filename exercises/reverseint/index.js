// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     //toString = turns number into string
//     //split = turns string into array
//     //reverse = reverses array 
//     //join = creates new string and concatenates into array 
//     // parseFloat = parses a string and returns a floating number again
//     // Math.sign = returns whether a number is negative, positive or zero
//     return (
//         parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)
//     )
// }

function reverseInt(n) { 
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
            
}
module.exports = reverseInt;
