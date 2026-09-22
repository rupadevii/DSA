/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length-1
    let leftMax = height[left], rightMax = height[right], count = 0

    while(left<right){
        if(leftMax<rightMax){
            left++
            if(height[left]>=leftMax){
                leftMax = height[left]
            }else{
                count += leftMax-height[left]
            }
        }else{
            right--
            if(height[right]>=rightMax){
                rightMax = height[right]
            }else{
                count += rightMax-height[right]
            }
        }

    }
    return count
};
