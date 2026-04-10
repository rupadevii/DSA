/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let top = 0;
    let right = matrix[0].length-1

    while(top<=matrix.length-1 && right>=0){
        if(matrix[top][right]===target) return true

        else if(matrix[top][right]>target) right--
        else top++
    }

    return false

     
};
