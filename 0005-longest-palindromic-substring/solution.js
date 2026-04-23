/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLength = 0;
    let str = "";
    for(let i=0; i<s.length; i++){
        expand(i, i);
        expand(i, i+1)
    }

    function expand(left, right){
        while(left>=0 && right<s.length && s[left] === s[right]){
            let subStr = s.substring(left, right+1);

            if(subStr.length > maxLength){
                str = subStr;
                maxLength = subStr.length
            }
            left--;
            right++;
        }
    }
    return str
};
