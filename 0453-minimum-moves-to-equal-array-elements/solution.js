/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Math.min(...nums)

    let count = 0

    for(let i of nums){
        count += i-min
    }

    return count

};
