/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1) return s
    let arr = new Array(numRows).fill().map(item => [])

    let whatever = 0
    let index = 0;
    for(let i=0; i<s.length; i++){
        arr[index].push(s[i])
        if(index === 0){
            whatever = 1
        }

        if(index===numRows-1){
           whatever = -1
        }

        index += whatever
    }

    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].join("")
    }

    return arr.join("")
};
