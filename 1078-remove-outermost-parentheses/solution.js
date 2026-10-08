/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = []

    let stack = []

    for(let i of s){
        if(i===")")  stack.pop()
        if(stack.length>0) res.push(i)
        if(i==="(") stack.push(i)
    }

    return res.join("")
};
