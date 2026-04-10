/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let arr = []

    for(let i=0; i<part.length-1; i++){
        arr.push(s[i])
    }

    for(let i=part.length-1; i<s.length; i++){
        arr.push(s[i])
        let subArr = []
        let j = part.length-1
        while(j>=0 && arr.length>=0){
            subArr.push(arr.pop())
            j--
        }

        subArr = subArr.reverse()
        if(subArr.join("")===part) continue

        for(let i of subArr){
            arr.push(i)
        }
    }

    return arr.join("")
};
