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

    let pp = arr.join(",")

    let arr2 = new Array(26).fill(0)

    for(let i=0; i<p.length; i++){
        arr2[s.charCodeAt(i)-97]++
    }

    let res = []

    let ss = arr2.join(",")

    if(ss===pp) res.push(0)

    for(let i=p.length; i<s.length; i++){
        arr2[s.charCodeAt(i)-97]++
        arr2[s.charCodeAt(i-p.length)-97]--

        if(arr2.join(",")===pp) res.push(i-p.length+1)
    }

    return res
};
