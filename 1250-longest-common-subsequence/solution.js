/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let arr = Array(text1.length+1).fill(0).map(() => Array(text2.length+1).fill(0))

    for(let i=text1.length-1; i>=0; i--){
        for(let j=text2.length-1; j>=0; j--){
            if(text1[i]===text2[j]) arr[i][j] = 1+arr[i+1][j+1]
            else arr[i][j] = Math.max(arr[i][j+1], arr[i+1][j])
        }
    }

    // console.log(arr)

    return arr[0][0]
};
