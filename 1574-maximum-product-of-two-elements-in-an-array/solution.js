/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // nums.sort((a, b) => a-b)

    // return (nums[nums.length-1]-1) * (nums[nums.length-2]-1)
    let max = 0
    let secondMax = 0

    for(let i of nums){
        if(i>max){
            secondMax = max
            max = i
        }else if(i>secondMax){
            secondMax = i
        }
    }

    return (max-1)*(secondMax-1)
};
