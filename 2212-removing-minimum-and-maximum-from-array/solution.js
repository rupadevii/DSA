/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let maxIndex = nums.indexOf(Math.max(...nums))
    let minIndex = nums.indexOf(Math.min(...nums))

    let max = Math.max(maxIndex, minIndex)
    let min = Math.min(maxIndex, minIndex)

    let count1 = min+1 + (nums.length-max)
    let count2 = max + 1
    let count3 = nums.length-min
    // console.log(count1, count2, count3)

    return Math.min(count1, count2, count3)
};
