/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function(drones, target) {
    let min = Infinity
    let index = -1

    for(let i=0; i<drones.length; i++){
        let dis = Math.abs(target[0]-drones[i][0])+Math.abs(target[1]-drones[i][1])

        if(dis<=drones[i][2] && dis<min){
            min = dis
            index = i
        }
    }

    return index
};
