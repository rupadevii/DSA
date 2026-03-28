/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maximum = 0;
    // for(let i=0; i<height.length; i++){
    //     for(let j=i; j<height.length; j++){
    //         let area = (j-i) * Math.min(height[i], height[j])
    //         maximum = Math.max(maximum, area)
    //     }
    // }
    let left = 0;
    let right = height.length-1

    // for(let i=0; i<height.length; i++){
    //     l
    // }

    while(left<right){
        let area = (right-left) * Math.min(height[right], height[left])
        maximum = Math.max(maximum, area)
        // left++;
        // right--

        if(height[left]<height[right]) left++
        else if(height[right]<=height[left]) right--
        // else{
        //     left++
        //     right--
        // }
    }

    return maximum
};
