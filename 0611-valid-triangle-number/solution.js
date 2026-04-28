/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a, b) => a-b)
    let count = 0
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let left = j+1
            let right = nums.length-1

            while(left<=right){
                let mid = Math.floor((left+right)/2)
                if(nums[mid]<nums[i]+nums[j]){
                    left = mid+1
                }else{
                    right = mid-1
                }
            }

            count += right-j
        }
        
    }

    return count
};
