/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let low = 1
    let high = Math.max(...nums)
    let res = 0

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        let sum = 0
        for(let i of nums){
            sum += Math.ceil(i/mid)
        }

        if(sum<=threshold){
            res = mid
            high = mid-1
        }
        else{
            low = mid+1
        }
    }

    return res
};
