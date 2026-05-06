/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map = new Map()
    let left = 0
    let maxFruits = 0

    for(let i=0; i<fruits.length; i++){
        map.set(fruits[i], (map.get(fruits[i])||0)+1)
        while(map.size>2){
            map.set(fruits[left], map.get(fruits[left])-1)
            if(map.get(fruits[left])===0){
                map.delete(fruits[left])
            }
            left++
        }
        maxFruits = Math.max(maxFruits, i-left+1)
    }

    return maxFruits
};
