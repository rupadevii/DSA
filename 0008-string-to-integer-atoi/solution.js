/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim()
    let arr = []
    let start = 0

    if(s[0]==="-"||s[0]==="+"){
        start = 1;
        arr.push(s[0])
    }

    let index = start;
   
    while(index<s.length && s[index]===0){
        index++
    }

    for(let i=index; i<s.length; i++){
        if(!isNaN(s[i]) && s[i]!==" ") arr.push(s[i])
        else break
    }
    // console.log(arr)

    let num = 0
    for(let i=start; i<arr.length; i++){
        num += arr[i] * Math.pow(10, arr.length-i-1)
    }
    if(num>2**31-1 && arr[0]==="-") num = 2**31
    else if(num>2**31-1) num = 2**31-1
    // console.log(num)
    return arr[0]==="-" ? -num : num
};
