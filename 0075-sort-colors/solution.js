/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let map = new Map()
    for(let i of nums){
        map.set(i, (map.get(i)||0)+1)
    }

    let i=0;
    while(i<(map.get(0)||0)){
        nums[i] = 0;
        i++
    }

    while(i-(map.get(0)||0)<(map.get(1)||0)){
        nums[i] = 1;
        i++
    }

    while(i<nums.length){
        nums[i] = 2;
        i++
    }
    
   
};
