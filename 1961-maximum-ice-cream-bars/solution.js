/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a-b)
    // console.log(costs)
    // 2, 3, 3, 5, 6, 6, 6, 7, 9, 10

    if(costs[0]>coins) return 0

    let sum = 0
    count = 0
    for(let i=0; i<costs.length; i++){
        sum += costs[i]
        if(sum>coins){
            return count
        }
        count++
    }

    return count
};
