/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let arr = []

    for(let i of s){
        i==="*" ? arr.pop() : arr.push(i)
    }
    
    return arr.join("")
};
