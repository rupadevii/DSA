/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map()

    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i])||0)+1)
    }

    let len = 0
    let flag = false

    for(let [key, value] of map){
        if(value % 2 ===0) len += value
    }

    // let max = 0;
    // let maxChar = ""

    // for(let [key, value] of map){
    //     if(value % 2 !== 0 && value >max){
    //         max = value
    //         maxChar = key
    //     }
    // }

    // len += max

    for(let [key, value] of map){
        if(value % 2 !== 0){
            len += value-1
            flag = true
        }
    }

    if(flag) len += 1
    
    return len
};
