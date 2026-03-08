/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let map = new Map();
    let freq = new Map()
    let left = 0;
    for(let right=0; right<s.length; right++){
        freq.set(s[right], (freq.get(s[right])||0)+1)
        // while(right-left+1>maxSize){
        if(right-left+1>minSize){
            freq.set(s[left], freq.get(s[left])-1)
            if(freq.get(s[left])===0){
                freq.delete(s[left]);
            }
            left++
        }
        if(freq.size <=maxLetters && right-left+1 >= minSize){
            map.set(s.substring(left, right+1), map.get(s.substring(left, right+1))+1 || 1)
            // left++
        }
    }
    
    let maxValue = 0;

    for (const [key, value] of map) {
    if (value > maxValue) {
        maxValue = value;
    }
    }
    return maxValue

    
};
