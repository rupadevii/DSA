/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a-b)

    arr[0] = 1
    let res = 1

    for(let i=1; i<arr.length; i++){
        if(arr[i]>=res+1){
            arr[i] = res+1
            res++
        }
    }

    return res
};
