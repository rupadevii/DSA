/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAverage = -Infinity
    let sum = 0;

    for(let i = 0; i<k; i++){
        sum+=nums[i]
    }

    maxAverage = sum/k;

    for(let i=k; i<nums.length; i++){
        sum += nums[i] - nums[i-k]
        let avg = sum/k
        maxAverage = Math.max(maxAverage, avg)

    }

    return maxAverage
};
