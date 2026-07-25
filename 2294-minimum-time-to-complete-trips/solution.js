/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = Math.min(...time)
    let high = 1e14

    let total = 0

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        let sum = 0
        for(let i of time){
            sum += Math.floor(mid/i)
        }
        // console.log(mid, sum)

        if(sum>=totalTrips){
            total = mid
            high = mid-1
        }else{
            low = mid+1
        }
    }

    return total
};
