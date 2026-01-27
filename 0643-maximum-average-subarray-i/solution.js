/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg;
    let sum = 0;
    for(let i=0; i<k; i++){
        sum+=nums[i]
    }
    maxAvg = sum/k
    
    for(let i=0; i<nums.length-k; i++){
        sum+= nums[i+k] - nums[i];
        let avg = sum/k;
        maxAvg = Math.max(avg, maxAvg)
    }
    return maxAvg
};
