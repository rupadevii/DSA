/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1
    let high = Math.max(...piles)
    let res = 0
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        let time = 0
        for(let i of piles){
            // console.log("i", i, "mid", mid)
            time += Math.ceil(i/mid)
        }
        if(time<=h){
            res = mid
            high = mid-1
        }else{
            low=mid+1
        }
    }

    return res
};
