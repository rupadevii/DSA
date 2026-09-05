/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
    let left = 0
    let right = plants.length-1, count = 0, capA = capacityA, capB = capacityB

    while(left<=right){
        if(left===right){
            if(plants[left]>capA && plants[right]>capB) count++
            break
        }
        if(plants[left]<=capA) capA -= plants[left]
        else{
            count++
            capA = capacityA-plants[left]
        }
        if(plants[right]<=capB) capB -= plants[right]
        else{
            count++
            capB = capacityB - plants[right]
        }
        left++
        right--
    }

    return count
};
