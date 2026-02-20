/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let currMax = 1;
    let currMin = 1;
    let maxProd = Math.max(...nums);

    for(let i of nums){
        let temp = currMax;
        currMax = Math.max(currMax*i, currMin*i, i);
        currMin = Math.min(temp*i, currMin*i, i);
        maxProd = Math.max(currMax, maxProd)
    }
    return maxProd;
};
