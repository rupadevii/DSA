/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i of nums){
        map.set(i, map.get(i) + 1 || 1)
    }
    for(let [key, value] of map){
        if(value > Math.floor(nums.length / 2)) return key
    }
};
