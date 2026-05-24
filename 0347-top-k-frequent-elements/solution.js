/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}

    for(let i of nums){
        obj[i] = (obj[i]||0)+1
    }

    let res = Object.entries(obj).sort((a, b) => b[1]-a[1]).slice(0, k).map(item => Number(item[0]))

    return res
};
