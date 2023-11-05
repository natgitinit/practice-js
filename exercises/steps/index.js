// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// for loop from 0 to n (through the rows)
// create empty string to form 'stair'
// for loop left to right (through the columns)
// if current column is <= current row, add a '#' 
// else add space to 'stair' 
// ---------------------
// |    #    |         | 
// ---------------------

// function steps(n) {
    
//     for (let row = 0; row < n; row++) {
//         let stair = '';
        
//         for( let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' '; 
//             }
//         }
//         console.log(stair)
//     }
// }

function steps(n, row = 0, stair = '') {
    //base case 
    if (n === row) {
        return; 
    }

    //recursive call 
    if ( n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    //second recursive call to add '#' if length is less than row
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
}

module.exports = steps;
