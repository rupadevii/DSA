/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let nums = [...arr]
    nums.sort((a, b) => a-b)

    let map = new Map()

    let idx= 1
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])) continue
        map.set(nums[i], idx++)
    }

    let res = []

    for(let i of arr){
        res.push(map.get(i))
    }

    return res
};
