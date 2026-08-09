/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let arr = new Array(26).fill(0)

    for(let i=0; i<p.length; i++){
        arr[p.charCodeAt(i)-97]++
    }

    function matches(arrs1, arrs2){
        for(let i=0; i<26; i++){
            if(arrs1[i] !== arrs2[i]) return false
        }

        return true
    }

    let arr2 = new Array(26).fill(0)

    for(let i=0; i<p.length; i++){
        arr2[s.charCodeAt(i)-97]++
    }

    let res = []

    if(matches(arr, arr2)) res.push(0)

    for(let i=p.length; i<s.length; i++){
        arr2[s.charCodeAt(i)-97]++
        arr2[s.charCodeAt(i-p.length)-97]--

        if(matches(arr, arr2)) res.push(i-p.length+1)
    }

    return res
};
