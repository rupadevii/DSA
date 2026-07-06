/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a-b)
    [1, 100, 1000]

    arr[0] = 1
    let res = 1

    for(let i=1; i<arr.length; i++){
        if(arr[i]-arr[i-1]>1){
            arr[i] = res+1
            res = res+1
        }
        else{
            res = arr[i]
        }
    }

    return res
};
