/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = new Map()
    let count = 0;

    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])) count+= map.get(nums[i])
        map.set(nums[i], (map.get(nums[i])||0)+1)
    }

    return count

    
};
