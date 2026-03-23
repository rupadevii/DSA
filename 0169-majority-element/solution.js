/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let map = new Map();
    // for(let i of nums){
    //     map.set(i, map.get(i) + 1 || 1)
    // }
    // for(let [key, value] of map){
    //     if(value > Math.floor(nums.length / 2)) return key
    // }
    
    //So called boyer moore majority voting algorithm
    let count = 0;
    let candidate = 0;
    for(let i of nums){
        if(count===0){
            candidate = i;
            count = 1;
        }
        else if(i===candidate) count++
        else count--
    }
    return candidate
};
