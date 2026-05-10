/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(nums.every(num => num===0)) return "0"
    return nums.map(num => String(num)).sort((a, b) => (b+a).localeCompare(a+b)).join("")
   
};
