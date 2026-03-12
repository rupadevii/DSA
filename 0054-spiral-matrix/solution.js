/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let arr = []
    let left=0;
    let right=matrix[0].length-1
    let top=0;
    let bottom = matrix.length-1;

    while(top<=bottom && left<=right){
        let i=left;
        while(i<=right){
            arr.push(matrix[top][i])
            i++
        }
        top++;
        let j=top
        while(j<=bottom){
            arr.push(matrix[j][right])
            j++
        }
        right--

        if(top<=bottom){
            let k=right;
            while(k>=left){
                arr.push(matrix[bottom][k])
                k--
            }
            bottom--
        }

        if(left<=right){
            let l = bottom;
            while(l>=top){
                arr.push(matrix[l][left])
                l--
            }
            left++
        }

    }

  
    return arr
};
