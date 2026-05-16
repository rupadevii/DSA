/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = []
    let set = new Set()

    for(let i of nums){
        if(set.has(i)) res.push(i)
        set.add(i)
    }
    
    let i=1;
    while(set.has(i)){
        i++
    }

    res.push(i)
    return res
};
