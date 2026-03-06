/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    let left = 0;
    let sum = 0;
    for(let right = 0; right<arr.length; right++){
        if(right-left+1 > k){
            sum -= arr[left]
            left++
        }
        sum += arr[right];
        if(right-left+1 === k && sum/k >= threshold){
            count++
        }
    }
    return count
};
