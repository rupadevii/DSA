/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix.length-1;
    let index = matrix[0].length-1;
    while(left<=right){
        // console.log(left, right)
        let mid = Math.floor((left+right)/2)
        if(matrix[mid][0]<=target && target<=matrix[mid][index]){
            let start = 0;
            let end = index;
            while(start<=end){
                let mid2 = Math.floor((start+end)/2)
                if(matrix[mid][mid2]===target) return true
                else if(matrix[mid][mid2]<target) start = mid2+1
                else end = mid2-1
            }
            return false
        }
        else if(target<matrix[mid][0]){
            right = mid-1
        }
        else if(target>matrix[mid][index]){
            left = mid+1
        }
    }

    return false
};
