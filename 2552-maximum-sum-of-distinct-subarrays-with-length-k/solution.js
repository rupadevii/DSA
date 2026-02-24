/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
var maximumSubarraySum = function(nums, k) {
    let maxSum = 0;
    let set = new Set()
    let sum = 0
    let left = 0
    for(let right=0; right<nums.length; right++){
        //check if the current element already exists in the window, if it does, keep removing elements from the set until the repeating element is removed (use left pointer)
        while(set.has(nums[right])){
            sum -= nums[left]
            set.delete(nums[left]);
            left++
        }

        //add the distinct element to the set and update the sum
        set.add(nums[right]);
        sum+= nums[right]

        //update the maxSum when the set has exactly k elements, remove the leftmost element (logically) and increase the left pointer's value
        if(right-left+1 === k){
            maxSum = Math.max(maxSum, sum)
            sum -= nums[left]
            set.delete(nums[left])
            left++
        }
    }

    return maxSum;
};
