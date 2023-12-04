// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let arr = str.split("");
    // let reverseArr = arr.reverse();
    // let join = reverseArr.join("");
    // return join; 
    // CHAINED METHOD
    // return str.split("").reverse().join("");
    //FOR LOOP SOLUTION
    let newStr = "";
    for (let character of str) {
        newStr = character + newStr;
        // debugger;
    }
    return newStr;
    // JS Reduce() 
    // debugger;
    // return str.split('').reduce((rev, char) => char + rev, '')

}

reverse('asdf');

module.exports = reverse;
