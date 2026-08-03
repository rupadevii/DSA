/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = new Map()

    for(let i of jewels){
        map.set(i, (map.get(i)||0)+1)
    }

    let count = 0
    for(let i of stones){
        if(map.has(i)) count++
    }

    return count
};
