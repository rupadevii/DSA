/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // const ways = 0;
    let arr = []
    arr[0] = cost[0]
    arr[1] = cost[1]
    for(let i=2; i<cost.length; i++){
        arr[i] = cost[i] + Math.min(arr[i-1],arr[i-2])
    }
    return Math.min(arr[cost.length-1],arr[cost.length-2])
};
