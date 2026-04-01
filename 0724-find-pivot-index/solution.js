/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((acc, ele) => acc+ele, 0)

    let sum2 = 0;
    for(let i=0; i<nums.length; i++){
        if(sum2 === sum-nums[i]-sum2) return i
        sum2 += nums[i]
    }
    return -1

};
