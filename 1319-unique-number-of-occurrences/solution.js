/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}
    for(let i of arr){
        if(obj[i]) obj[i]++
        else obj[i] = 1;
    }
    console.log(new Set(Object.values(obj)).size)
    return new Set(Object.values(obj)).size===Object.values(obj).length

    
};
