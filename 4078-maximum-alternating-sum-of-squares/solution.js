/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    nums = nums.map(num => num*num)

    nums.sort((a, b) => a-b)

    let res = 0

    for(let i=0; i<Math.floor(nums.length/2); i++){
        res -= nums[i]
    }
    for(let i=Math.floor(nums.length/2); i<nums.length; i++){
        res += nums[i]
    }
    // console.log(res)

    return res
};
