/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0]

    for(let i of s){
        if(i==="("){
            stack.push(0)
        }else{
            let top = stack.pop()
            stack[stack.length-1] += Math.max(1, 2*top)
        }
    }
    // console.log(stack)

    return stack[0]

};

