/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let map = new Map()

    for(let i of nums){
        map.set(i, (map.get(i)||0)+1)
    }

    if(k===1){
        let max = -Infinity
        for(let [key, value] of map){
            if(key>max && value=== 1) max = key
        }
        if(max!== -Infinity) return max
        else return -1
    }

    if(k===nums.length) return Math.max(...nums)

    if((map.get(nums[nums.length-1])===1 && map.get(nums[0])===1) || nums.length===k) return Math.max(nums[nums.length-1], nums[0])

    else if(map.get(nums[0])===1) return nums[0]

    else if(map.get(nums[nums.length-1])===1) return nums[nums.length-1]

    else return -1
};
