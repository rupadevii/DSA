/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // const sum = gain.reduce((acc, ele) => acc+ele, 0)

    let gainI = 0;
    let highestAl = 0

    for(let i=0; i<gain.length; i++){
        gainI += gain[i]
        highestAl = Math.max(highestAl, gainI)
    }
    return highestAl
};
