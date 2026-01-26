/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let min=Infinity;
    arr.sort((a, b) => a-b);
    let nums=[]
    for(let i=1; i<arr.length; i++){
        min = Math.min(min, Math.abs(arr[i]-arr[i-1]))
    }

    for(let i=1; i<arr.length; i++){
        if(Math.abs(arr[i]-arr[i-1]) === min){
            nums.push([arr[i-1],arr[i]])
        }
    }
    return nums
};
