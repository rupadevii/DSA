/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]), i];
            break;
        } 
        else map.set(nums[i], i)
    }
};
