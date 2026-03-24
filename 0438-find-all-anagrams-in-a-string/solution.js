/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // if(p.length>s.length) return []
    // let arr = []
    // let map1 = new Map()
    // let map2 = new Map();

    // for(let i=0; i<p.length; i++){
    //     map1.set(s[i], map1.get(s[i])+1 || 1);
    //     map2.set(p[i], map2.get(p[i])+1 || 1);
    // }

    // let isEqual = true
    // for(let [key, value] of map1){
    //     if(!map2.has(key) || map2.get(key) !== value) isEqual = false
    // }

    // if(isEqual) arr.push(0)

    // let left = 0;
    // for(let right = p.length; right<s.length; right++){
    //     map1.set(s[right], map1.get(s[right])+1 || 1);
    //     if(map1.get(s[left])===1){
    //         map1.delete(s[left]);
    //     }else{
    //         map1.set(s[left], map1.get(s[left])-1)
    //     }
    //     left++;
    //     isEqual = true
    //     for(let [key, value] of map1){
    //         if(!map2.has(key) || map2.get(key) !== value) isEqual = false
    //     }

    //     if(isEqual) arr.push(left)
    // }
    // return arr

    let arr = new Array(26).fill(0)
    let res = []

    for(let i=0; i<p.length; i++){
        arr[p.charCodeAt(i)-97]++
    }
    let str = arr.join(",")

    let arr1 = new Array(26).fill(0)
    for(let i=0; i<p.length; i++){
        arr1[s.charCodeAt(i)-97]++
    }

    if(str===arr1.join(",")) res.push(0)

    for(let i=p.length; i<s.length; i++){
        arr1[s.charCodeAt(i)-97]++
        arr1[s.charCodeAt(i-p.length)-97]--
        if(str===arr1.join(",")) res.push(i-p.length+1)
    }

    return res
};
