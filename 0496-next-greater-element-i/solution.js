/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = []

    let map = new Map()

    let ans = []

    for(let i=nums2.length-1; i>=0; i--){
        while(arr.length>0 && arr[arr.length-1]<=nums2[i]){
            arr.pop()
        }

        if(arr.length>0){
            map.set(nums2[i], arr[arr.length-1])
        }
        else{
            map.set(nums2[i], -1)
        }
        arr.push(nums2[i])
    }

    for(let i=0; i<nums1.length; i++){
        ans[i] = map.get(nums1[i])
    }

    return ans
};
