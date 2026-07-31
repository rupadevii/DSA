/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let arr = new Array(26).fill(0)
    let count = 0

    for(let i=0; i<word.length; i++){
        arr[word.charCodeAt(i)-97]++
    }

    arr.sort((a, b) => b-a)

    for(let i=1; i<=arr.length; i++){
        count += Math.ceil(i/8)*arr[i-1]
        // 0 arr[i] arr[i] arr[i] 
        // if(i<8){
        //     count += arr[i]
        // }else if(i<16){
        //     count += 2*arr[i]
        // }else if(i<24){
        //     count += 3*arr[i]
        // }else{
        //     count += 4*arr[i]
        // }
    }

    return count
};
