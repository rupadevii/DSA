/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    let arr = new Array(26).fill(0)

    for(let i=0; i<s1.length; i++){
        arr[s1.charCodeAt(i)-97]++
    }


    let arr2 = new Array(26).fill(0)
    for(let i=0; i<s1.length; i++){
        arr2[s2.charCodeAt(i)-97]++
    }

    if(matches(arr, arr2)) return true

    function matches(arrs1, arrs2){
        for(let i=0; i<26; i++){
            if(arrs2[i] !== arrs1[i]) return false
        }
        return true
    }

    for(let i=s1.length; i<s2.length; i++){
        arr2[s2.charCodeAt(i)-97]++
        arr2[s2.charCodeAt(i-s1.length)-97]--
        if(matches(arr, arr2)) return true
    }

    return false
};
