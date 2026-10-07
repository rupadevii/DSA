/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length-1
    let leftMax = height[left], rightMax = height[right], count = 0

    while(left<right){
        if(leftMax<=rightMax){
            left++
            leftMax = Math.max(height[left], leftMax)
            count += leftMax-height[left]
        }else{
            right--
            rightMax = Math.max(height[right], rightMax)
            count += rightMax-height[right]
        }

    }
    return count
};
