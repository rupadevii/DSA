/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    let map = new Map()
    map.set(0, -1)

    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        let rem = sum%k;

        // if(map.has(rem) && i-map.get(rem)>=1){
        //     return true
        if(map.has(rem)){
            if(i-map.get(rem)>1){
                return true
            }
        }
        else{
            map.set(rem, i)

        }

    }

    return false
};
