/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let minSum = Infinity;

    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            let sum = nums.slice(i, j+1).reduce((acc, ele) => acc+ele, 0)
            if(j-i+1>=l && j-i+1<=r && sum>0){
                minSum = Math.min(sum, minSum)
            }
        }
    }

    return minSum === Infinity ? -1 : minSum

};
