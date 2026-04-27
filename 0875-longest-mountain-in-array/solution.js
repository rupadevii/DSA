/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    if(arr.length<3) return 0

    let maxLen = 0
    let i=1

    while(i<arr.length-1){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            let left = i-1
            let right = i+1
            while(left>0 && arr[left]>arr[left-1]){
                left--
            }

            while(right<arr.length-1 && arr[right]>arr[right+1]){
                right++
            }
            maxLen = Math.max(maxLen, right-left+1)
        }
        // while(left>0 && right<arr.length && arr[left]<arr[left+1] && arr[right]<arr[right-1]){
        //     maxLen = Math.max(maxLen, right-left+1)
        //     left--
        //     right++
        // }
 
        i++
    }

    return maxLen

};
