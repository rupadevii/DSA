/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let low = Math.max(...weights)
    let high = weights.reduce((acc, ele) => acc+ele, 0)
    let res = 0

    while(low<=high){
        let mid = Math.floor((low+high)/2)
        // console.log(mid)

        let sum = 0
        let count = 0
        for(let i of weights){
            if(sum+i>mid){
                count++
                sum = i
            }else{
                sum += i
            }
        }

        if(count+1 <= days){
            res = mid
            high = mid-1
        }else{
            low = mid + 1
        }
    }

    return res

};
