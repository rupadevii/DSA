/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // for(let i=0; i<numbers.length; i++){
    //     let left = i+1;
    //     let right = numbers.length-1;
    //     while(left<=right){
    //         let mid = Math.floor((left+right)/2)
    //         if(numbers[mid]===target-numbers[i]){
    //             return [i+1, mid+1]
    //         }
    //         else if(numbers[mid]>target-numbers[i]) right = mid-1
    //         else left = mid + 1
    //     }
    // }
    let left = 0;
    let right = numbers.length-1;
    while(left<=right){
        if(numbers[left]+numbers[right]===target){
            return [left+1, right+1]
        }
        else if(numbers[left]+numbers[right]>target) right--
        else left++
    }
};
