// you are given an n x n 2D matrix that represents an image. 
// Rotate the image by 90 degrees (clockwise)

function rotateImage(matrix) {
    const n = matrix.length; 

    // Transpose the matrix 
    for(let i =0; i < n; i++) {
        for(let j= i; j < n; j++) {
            // swap matrix[i][j] with matrix[j][i]
            // [[1234], [4321]] = [[4321], [1234]]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    // Reverse each row of the transposed matrix
    for(let i =0; i < n; i++) {
        matrix[i].reverse();
    }

}

// Example usage:
const image = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotateImage(image);
console.log(image)

// The rotated image is:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]