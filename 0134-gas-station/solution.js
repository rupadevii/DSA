/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = gas.reduce((acc, ele) => acc+ele, 0)
    let totalCost = cost.reduce((acc, ele) => acc+ele, 0)

    if(totalGas<totalCost) return -1

    let start = 0
    let currGas = 0

    for(let i=0; i<gas.length; i++){
        currGas += gas[i]-cost[i]

        if(currGas<0){
            start = i+1
            currGas = 0
        }
    }

    return start
};
