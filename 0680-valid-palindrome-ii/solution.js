/**
 * @param {string} s
 * @return {boolean}
 */
 
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1
    let count = 0;
    let ldx = 0;
    let rdx = 0;

    while(left<=right){
        if(s[left]===s[right]){
            left++
            right--
        }
        else if(count===1 && s[left]!==s[right]){
            left = ldx
            right = rdx
            right--
            count++
            // return false
        }
        else{
            if(count>1) return false
            ldx = left
            rdx = right
            left++;
            count++;
            
        }
    }
    return true
};
