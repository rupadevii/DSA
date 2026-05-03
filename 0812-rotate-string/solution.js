/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length!==goal.length) return false

    for(let i=1; i<=goal.length; i++){
        let str = new Array(s.length)

        str[str.length-1] = s[i-1]
        for(let j=0; j<s.length; j++){
            let index = (j-i)%s.length < 0 ? (j-i)%s.length+s.length : (j-i)%s.length
            str[index] = s[j]
        }
        // console.log(str)

        if(str.join("")===goal) return true
    }

    return false
};
