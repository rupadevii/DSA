/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumCost = function(nums, k) {
    let cost = 0
    let n = 0n
    let num = k

    for(let i of nums){
        if(k>=i){
            k-=i
        }else{
            let c = Math.ceil((i-k)/num)
            k = k + (c*num) - i
            n += BigInt(c)
        }
    }

    cost = (n*(n+1n))/2n
    return Number(cost%(1000000007n))
};
