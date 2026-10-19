/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let low = 0
    let high = matrix.length-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        let left = 0
        let right = matrix[mid].length-1

        if(matrix[mid][left]<=target && target<=matrix[mid][right]){
            while(left<=right){
                let mid2 = Math.floor((left+right)/2)

                if(matrix[mid][mid2]===target) return true
                else if(matrix[mid][mid2]<target){
                    left = mid2+1
                }else{
                    right = mid2-1
                }
            }
            return false
        }
        else if(target<matrix[mid][left]){
            high = mid-1
        }else{
            low = mid+1
        }
    }

    return false
};
