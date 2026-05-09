/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {}

    for(let i of s){
        obj[i] = (obj[i]||0)+1
    }

    let arr = []

    Object.entries(obj).sort((a, b) => b[1]-a[1]).forEach(ele => {
        for(let i=0; i<ele[1]; i++){
            arr.push(ele[0])
        }
    })

    return arr.join("")
};
