/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let minJumps = 0
    let start = 0
    let end = 0
    while(end<nums.length-1){
        let jumps = 0
        for(let i=start; i<=end; i++){
            jumps = Math.max(jumps, i+nums[i])
        }
        start = end+1
        end = jumps
        minJumps++
    }

    return minJumps

};
