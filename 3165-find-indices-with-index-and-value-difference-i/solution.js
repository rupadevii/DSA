/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    for(let left = 0; left<nums.length; left++){
        for(let right = 0; right<nums.length; right++){
            if(Math.abs(nums[left]-nums[right])>=valueDifference && Math.abs(left-right)>=indexDifference){
                return [left, right]
            }
        }

    }
    return [-1, -1]
};
