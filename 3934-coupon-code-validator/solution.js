/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const arr = []
    const set = new Set(["electronics", "grocery", "pharmacy", "restaurant"])

    for(let i=0; i<code.length; i++){
        // console.log(set.has(businessLine[i]))
        if(/^[a-zA-Z0-9_]+$/.test(code[i]) && set.has(businessLine[i]) && isActive[i]){
            arr.push({code:code[i], businessLine: businessLine[i]})
        }
    }
    // console.log(arr)
    const order = {
        "electronics": 0,
        "grocery": 1,
        "pharmacy": 2,
        "restaurant": 3
    }

    arr.sort((a, b) => {
        if(order[a.businessLine] !== order[b.businessLine]){
            return order[a.businessLine]-order[b.businessLine]
        }else{
            return a.code>b.code ? 1 : -1
        }
    })

    let res = []

    for(let i of arr){
        res.push(i.code)
    }

    return res
    
};
