/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxVowelsInString = 0;

    let vowels = 'aeiou'
    let count = 0
    for(let i=0; i<k; i++){
        if(vowels.includes(s[i])) count++
    }

    maxVowelsInString = count;

    // let left = 0;
    for(let i = k; i<s.length; i++){
        if(vowels.includes(s[i])) count++;
        if(vowels.includes(s[i-k])) count--
        maxVowelsInString = Math.max(maxVowelsInString, count)
    }

    return maxVowelsInString


};
