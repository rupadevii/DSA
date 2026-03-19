/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = m-1;
    let second = n-1;

    for(let i=nums1.length-1; i>=0; i--){
        if(nums2[second]>nums1[first]|| first<0){
            nums1[i] = nums2[second]
            second--
        }
        else{
            nums1[i] = nums1[first]
            first--
        }
    }
    
    
};

