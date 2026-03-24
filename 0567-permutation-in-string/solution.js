/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let arr = new Array(26).fill(0)

    for(let i=0; i<s1.length; i++){
        // map.set(s1[i], (map.get(s1[i])||0) + 1)
        arr[s1.charCodeAt(i)-97]++
    }

    let str = arr.join(",")

    let arr2 = new Array(26).fill(0)
    for(let i=0; i<s1.length; i++){
        arr2[s2.charCodeAt(i)-97]++
    }
    if(str===arr2.join(",")) return true

    for(let i=s1.length; i<s2.length; i++){
        arr2[s2.charCodeAt(i)-97]++
        arr2[s2.charCodeAt(i-s1.length)-97]--
        if(str === arr2.join(",")) return true
    }

    return false
};
