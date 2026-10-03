/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let set = new Set(nums)
    let max = Math.max(...nums) < 0 ? 1: Math.max(...nums)
    let sol

    for(let i=1; i<=max; i++){
        if(!set.has(i)){
            sol = i
            break
        }
    }
    
    return sol ? sol : max+1
};

