/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let top = 0
    let bottom = matrix.length-1

    while(top<=bottom){
        [matrix[top], matrix[bottom]] = [matrix[bottom], matrix[top]]
        top++
        bottom--
    }

    for(let i=0; i<matrix[0].length; i++){
        for(let j=0; j<=i; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};
