/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = []
    let max = 0
    let count = 0

    for(let i of s){
        if(i===")"){
            count--
        }
        else if(i==="("){
            count++
        }
        max = Math.max(max,count)
    }

    return max
};
