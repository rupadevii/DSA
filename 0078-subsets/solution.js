/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    const ans = []

    function subSet(i){
        if(i===nums.length){
            res.push([...ans])
            return
        }

        ans.push(nums[i])
        subSet(i+1)

        ans.pop()
        subSet(i+1)
    }

    subSet(0)
    return res
};
