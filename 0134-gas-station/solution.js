/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let gasSum = gas.reduce((acc, ele) => acc+ele, 0)
    let costSum = cost.reduce((acc, ele) => acc+ele, 0)

    if(gasSum<costSum) return -1

    let index = 0
    let currentGas = 0
    for(let i=0; i<gas.length; i++){
        currentGas += gas[i]-cost[i]
        if(currentGas<0){
            currentGas = 0
            index = i+1
        }
    }

    return index

};
