/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0;
    let start = 0;
    let end = 0
    while(end<nums.length-1){
        let maxReach = 0;
        for(i=start; i<=end; i++){
            maxReach = Math.max(maxReach, i+nums[i])
        }
        start = end+1;
        end = maxReach
        count++
    }
    return count
    
};
