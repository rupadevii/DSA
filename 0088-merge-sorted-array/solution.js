/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = m-1;
    let right = n-1;

    for(let i=m+n-1; i>=0; i--){
        if(nums2[right]>nums1[left] || nums1[left]===undefined){
            nums1[i] = nums2[right]
            right--
        }
        else{
            nums1[i] = nums1[left]
            left--
        }
    }
};
