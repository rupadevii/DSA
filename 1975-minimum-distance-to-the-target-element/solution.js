/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let left = 1e9;
    let right = 1e9
    for(let i=0; i<start; i++){
        if(nums[i] === target){
            left = i
        }
    }
    for(let i=start; i<=nums.length; i++){
        if(nums[i] === target){
            right = i
            break
        }
    }

    return Math.min(Math.abs(left-start), Math.abs(right-start))
};
