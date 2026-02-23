/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map()
    map.set(0, 1)

    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        let rem = sum % k;
        if(sum%k < 0) rem = sum%k+k
        
        if(map.get(rem)){
            count += map.get(rem)
        }

        map.set(rem, map.get(rem)+1 || 1)
    }
    return count
};
