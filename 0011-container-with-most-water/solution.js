/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAmount = 0

    let left = 0
    let right = height.length-1

    while(left<right){
        let area = Math.min(height[left], height[right]) * (right-left)

        maxAmount = Math.max(area, maxAmount)

        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }

    return maxAmount
};
