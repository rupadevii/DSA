/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = []
    let open = 0
    let res = 0

    for(let i of s){
        if(i==="("){
            open++
        }else{
            if(open <= 0) res++
            else open--
        }
    }

    return open+res
};
