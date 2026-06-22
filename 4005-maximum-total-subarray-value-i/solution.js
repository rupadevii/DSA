/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    // let arr = []

    // for(let i=0; i<nums.length; i++){
    //     for(let j=i; j<nums.length; j++){
    //         let subArr = nums.slice(i, j+1)
    //         let max = Math.max(...subArr)
    //         let min = Math.min(...subArr)
    //         let val = max-min
    //         arr.push(val)
    //     }
    // }

    // let res = 0
    // arr.sort((a, b) => b-a)
    // // console.log(arr)

    // let first = 0
    // for(let i=0; i<k; i++){
    //     first += arr[0]
    // }
    // for(let i=0; i<k; i++){
    //     res += arr[i]
    // }

    // return Math.max(res, first)

    // let maxVal = -Infinity
    // let minVal = Infinity
    // let arr = []
    // for(let i=0; i<nums.length; i++){
    //     maxVal = Math.max(maxVal, nums[i])
    //     minVal = Math.min(minVal, nums[i])
    //     let val = maxVal-minVal
    //     // console.log(val)
    //     arr.push(val)
    // }

    // arr.sort((a, b) => b-a)
    // // console.log(arr)

    // let res = 0
    // for(let i=0; i<k; i++){
    //     res += arr[i]
    // }
    // // console.log(res)
    // return res ? Math.max(res, arr[0]*k) : arr[0]*k

    let max = Math.max(...nums)
    let min = Math.min(...nums)

    return (max-min)*k
};
