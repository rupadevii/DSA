/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let index = 0
    let count = 0

    for(let i of nums){
        if(i<target) index++
        else if(i===target) count++
    }

    let res = []

    for(let i=index; i<index+count; i++){
        res.push(i)
    }

    return res
};
