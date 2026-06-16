/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0
    let right = matrix.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(matrix[mid][0]<=target && target<=matrix[mid][matrix[0].length-1]){
            let low = 0
            let high = matrix[0].length-1

            while(low<=high){
                let mid2 = Math.floor((low+high)/2)
                if(matrix[mid][mid2]===target) return true
                else if(matrix[mid][mid2]<target) low = mid2+1
                else high = mid2-1
            }

            return false
        }
        else if(target<matrix[mid][0]){
            right = mid-1
        }else if(target>matrix[mid][matrix[0].length-1]){
            left = mid+1
        }
    }

    return false
};
