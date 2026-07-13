/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let str = '123456789'
    let set = new Set()

    for(let i=0; i<str.length; i++){
        for(let j=1; j<=str.length; j++){
            set.add(Number(str.substring(i, j)))
        }
    }

    let arr = Array(...set)
    return arr.filter(item => item>=low && item<=high).sort((a, b) => a-b)
};
