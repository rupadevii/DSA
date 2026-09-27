/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    nums.sort((a, b) => a-b)
    let map = new Map()

    for(let i of nums){
        map.set(i, (map.get(i)||0)+1)
    }

    let ans = []

    while(map.size>0){
        for(let [key, value] of map){
            ans.push(key)
            map.set(key, value-1)
            if(map.get(key)===0) map.delete(key)
        }
    }

    return ans
};
