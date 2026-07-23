/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let maxLen = 0
    let map = new Map()
    map.set(0, -1)

    let sum = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            sum -= 1
        }else{
            sum += 1
        }

        if(map.has(sum)){
            maxLen = Math.max(maxLen, i-map.get(sum))
        }else{
            map.set(sum, i)
        }
    }

    return maxLen
};
