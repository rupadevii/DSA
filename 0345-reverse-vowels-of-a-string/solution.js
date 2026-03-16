/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("")
    let left = 0;
    let right = s.length-1;
    let vowels = 'aeiouAEIOU'
    while(left<right){
        if(vowels.includes(s[left]) && vowels.includes(s[right])){
            [s[left], s[right]] = [s[right], s[left]]
            left++;
            right--;
        }
        else if(!vowels.includes(s[left])){
            left++
        }
        else if(!vowels.includes(s[right])){
            right--
        }
    }
    return s.join("")
};
