/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length<b.length) a = a.padStart(b.length, "0")
    if(b.length<a.length) b = b.padStart(a.length, "0")
    let res = new Array(Math.max(a.length, b.length)+1).fill(0)
    let carry = 0, ptr = res.length-1, index = Math.max(a.length, b.length)-1
    // console.log(a, b, res, ptr, index)

    while(index>=0){
        // console.log(a[index], b[index], a[index]===b[index])
        if(a[index]==="0" && b[index]==="0"){
            res[ptr] = 0+carry
            carry = 0
        }else if(a[index]!==b[index]){
            res[ptr] = carry===0 ? 1+carry : 0
            carry = carry===0 ? 0 : 1
        }else{
            res[ptr] = 0+carry
            carry=1
        }
        ptr--
        index--
    }
    res[0] = carry
    if(res[0]===0) res.shift()

    return res.join("")
};
