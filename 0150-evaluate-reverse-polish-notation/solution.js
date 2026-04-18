/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    function calc(a, b, op){
        if(op === "+") return a+b
        else if(op === "-") return a-b
        else if(op === "*") return a*b
        else if(op === "/"){
            // if(b<0 || a<0) return Math.ceil(a/b)
            // return Math.floor(a/b)
            return Math.trunc(a/b)
        } 
        else return a**b
    }

    let arr = []
    for(let i=0; i<tokens.length; i++){
        let curr = tokens[i]
        if(!isNaN(curr)){
            arr.push(Number(curr))
        }else{
            let num1 = arr.pop()
            let num2 = arr.pop()
            let sol = calc(num2, num1, curr)
            arr.push(sol)
        }
    }
    return arr[arr.length-1]
};
