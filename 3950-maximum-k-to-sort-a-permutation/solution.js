/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    let n = -1

    for(let i=0; i<nums.length; i++){
        if(nums[i]===i) continue
        n &= nums[i]
    }

    return n===-1 ? 0: n
};
