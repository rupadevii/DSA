/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums)
    let high = nums.reduce((acc, ele) => acc+ele, 0)
    let res = 0

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        let sum = 0
        let count = 0

        for(let i of nums){
            if(sum+i>mid){
                count++
                sum = i
            }else{
                sum += i
            }
        }

        if(count+1<=k){
            res = mid
            high = mid-1
        }else{
            low = mid+1
        }
    }

    return res
};
