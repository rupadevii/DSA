/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a, b) => b-a)

    const sum = cost.reduce((acc, ele) => acc+ele, 0)
    let sum2 = 0
    for(let i=2; i<cost.length; i+=3){
        sum2+= cost[i]
    }

    return sum-sum2
};
