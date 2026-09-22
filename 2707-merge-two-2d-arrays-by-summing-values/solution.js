/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let res = []

    let first = 0, second = 0

    while(first<nums1.length || second<nums2.length){
        if(!nums2[second] || (nums1[first] && nums1[first][0] < nums2[second][0])){
            res.push([nums1[first][0], nums1[first][1]])
            first++
        }else if(!nums1[first] || nums1[first][0] > nums2[second][0]){
            res.push([nums2[second][0], nums2[second][1]])
            second++
        }else if(nums1[first][0] === nums2[second][0]){
            res.push([nums1[first][0], nums1[first][1]+nums2[second][1]])
            first++
            second++
        }
    }

    return res
};
