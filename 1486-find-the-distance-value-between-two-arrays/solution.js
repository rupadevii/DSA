/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0

    for(let i of arr1){
        let exists = true
        for(let j of arr2){
            if(Math.abs(i-j) <= d){
                exists = false
                break
            }
        }
        count += exists ? 1 : 0
    }

    return count
};
