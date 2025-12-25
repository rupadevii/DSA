/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i of grid){
        for(let j of i){
            if(j < 0) count++;
        }
    }
    return count;
};
