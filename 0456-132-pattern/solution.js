/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {

    let n = nums.length;

    let c = -Infinity
    let stack = [];

    for(let i=n-1; i>=0; i--){
        if(nums[i] < c){
            return true;
        }

        while(stack.length>0 && stack[stack.length-1] < nums[i]){
            c = stack[stack.length-1];
            stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;

};
