/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const arr = [];
    const map = new Map()
    for(let i=0; i<nums1.length; i++){
        map.set(nums1[i], map.get(nums1[i])+1 || 1)
    }

    for(let i=0; i<nums2.length; i++){
        if(map.has(nums2[i]) && !arr.includes(nums2[i])){
            arr.push(nums2[i])
        }
    }

    return arr
};
