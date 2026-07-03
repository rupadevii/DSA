/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    let res = []
    let ans = ''

    for(let i=0; i<target.length; i++){
        let str = ''
        let num = 97
        // console.log(target.charCodeAt(i))
        while(target.charCodeAt(i)>=num){
            str = String.fromCharCode(num)
            res.push(ans+str)
            num++
        }
        ans = res[res.length-1]
    }
    // console.log(res)
    return res
};
