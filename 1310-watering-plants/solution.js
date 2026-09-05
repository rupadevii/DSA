/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let count = 0
    let curr = capacity

    for(let i=0; i<plants.length; i++){
        if(plants[i]<=curr){
            count++
            curr -= plants[i]
        }else{
            count += 2*i+1
            curr = capacity-plants[i]
            // curr -= plants[i]
        }
        // console.log(count, curr)
    }

    return count
};
