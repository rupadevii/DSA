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
        let k = Math.floor((low+high)/2)
        let count = 0

        for(let i of piles){
            count += Math.ceil(i/k)
        }

        if(count<=h){
            res = k
            high = k-1
        }else{
            low = k+1
        }
    }

    return res
};
