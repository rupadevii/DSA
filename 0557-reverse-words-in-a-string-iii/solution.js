/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ")
    let res = []

    function reverseStr(str){
        let left = 0;
        let right = str.length;
        while(left<right){
            [str[left], str[right]] = [str[right], str[left]]
            left++;
            right--
        }
        return str.join("")
    }

    for(let i of s){
        i = i.split("")
        res.push(reverseStr(i))
    }

    return res.join(" ")
};

