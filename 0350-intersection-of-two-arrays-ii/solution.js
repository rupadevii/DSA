/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const arr = [];
    const map = new Map()
    for(let i=0; i<nums1.length; i++){
        map.set(nums1[i], map.get(nums1[i])+1 || 1)
    }

    for(let i of nums2){
        if(map.has(i) && map.get(i)!==0){
            arr.push(i)
            map.set(i, map.get(i)-1)
        }
    }

    return arr
};
