/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let longest = 0;
    for(let i of set){
        if(!set.has(i-1)){
            let start = i
            let count = 1
            while(set.has(start+1)){
                start++;
                count++
            }
            longest = Math.max(count, longest)
        }
    }
    return longest
};
