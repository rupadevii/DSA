/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestSubarray = function(nums, k) {
    let map = new Map()

    let left = 0

    function getPrime(n){
        let ans = []

        for(let i=2; i<=Math.sqrt(n); i++){
            while(n%i===0 && n>0){
                ans.push(i)
                n = n/i
            }
        }

        if (n > 1) {
            ans.push(n);
        }

        return ans
    }

    let maxLen = 0

    for(let i=0; i<nums.length; i++){
        let primes = getPrime(nums[i])

        for(let j of primes){
            map.set(j, (map.get(j)||0)+1)
        }

        while(map.size>k){
            let rem = getPrime(nums[left])

            for(let j of rem){
                map.set(j, map.get(j)-1)
                if(map.get(j)===0) map.delete(j)
            }

            left++
        }

        maxLen = Math.max(maxLen, i-left+1)
    }

    return maxLen
};
