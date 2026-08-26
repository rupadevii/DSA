/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let ans = ''

    let left = 0, count = 0
    for(let i=0; i<s.length; i++){
        if(s[i]==="1") count++

        while(count>k || s[left]==="0"){
            count -= s[left]
            left++
        }

        if(count===k){
            const str = s.substring(left, i+1)
            if(!ans || str.length<ans.length || (str.length===ans.length && str<ans)){
                ans = str
            }
        }
    }

    return ans
};
