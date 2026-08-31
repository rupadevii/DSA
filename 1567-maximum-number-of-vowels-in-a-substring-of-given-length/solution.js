/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxVowelsInString = 0;

    let set = new Set(['a', 'e', 'i', 'o', 'u'])
    // console.log(set)
    let count = 0
    for(let i=0; i<k; i++){
        if(set.has(s[i])) count++
    }

    maxVowelsInString = count;

    // let left = 0;
    for(let i = k; i<s.length; i++){
        if(set.has(s[i])) count++;
        if(set.has(s[i-k])) count--
        maxVowelsInString = Math.max(maxVowelsInString, count)
    }

    return maxVowelsInString


};
