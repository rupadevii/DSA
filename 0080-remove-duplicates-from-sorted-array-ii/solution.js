/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0; pt = 2

    for(let i=2; i<nums.length; i++){
        if(nums[index]!==nums[i]){
            nums[pt++] = nums[i]
            index++
        }
    }
    return pt
};
