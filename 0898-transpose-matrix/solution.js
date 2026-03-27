/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let mat = []

    for(let i=0; i<matrix[0].length; i++){
        let row = []
        for(let j=0; j<matrix.length; j++){
            row.push(matrix[j][i])
        }
        mat.push(row)
    }
    return mat
};
