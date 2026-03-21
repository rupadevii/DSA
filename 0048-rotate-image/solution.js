/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let top = 0;
    let bottom = matrix.length-1
    while(top<=bottom){
        [matrix[top], matrix[bottom]] = [matrix[bottom], matrix[top]]
        top++;
        bottom--
        // while(j<matrix.length){
        //     [matrix[j][left], matrix[j][right]] = [matrix[j][right], matrix[j][left]]
        //     j++
        // }
        // left++;
        // right--;
    }

    let i=0;
    let j=0;

    // while(i<matrix.length && j<matrix.length){
    //     [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    //     i++;
    //     j++
    //  }
    
    while(i<matrix.length){
        while(j<=i){
            console.log("i", i, "j", j);
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
                j++
            }
        
        i++
        j=0;
    }
    // let left = 0;
    // let right = matrix.length-1;
    // let i=0

    // while(left<right){
    //     while(i<matrix.length){
    //     [matrix[i][left], matrix[right][i]] = [matrix[right][i], matrix[i][left]]
    //     i++
    //     }
    //     left++;
    //     right--
    // }

    // [matrix[0][0], matrix[2][2]] = [matrix[2][2], matrix[0][0]];
    // [matrix[0][1], matrix[1][2]] = [matrix[1][2], matrix[0][1]];
    console.log(matrix);
    // [matrix[1][0], matrix[2][1]] = [matrix[2][1], matrix[1][0]] 

    // console.log(i, j, last)

    
};
