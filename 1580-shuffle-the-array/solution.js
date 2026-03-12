/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let first = 0;
    let second = n;
    let index = 0
    let arr = []
    while(first<nums.length && second<nums.length){
        arr[index++] = nums[first]
        arr[index++] = nums[second]
        first++;
        second++;
    }
    return arr
};
