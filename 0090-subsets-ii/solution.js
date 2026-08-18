/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a-b)

    const res = []
    const ans = []
    function createSubSet(i){
        if(i===nums.length){
            res.push([...ans])
            return
        }

        ans.push(nums[i])
        createSubSet(i+1)

        ans.pop()
        while(i+1<nums.length && nums[i+1]===nums[i]){
            i++
        }

        createSubSet(i+1)
    }

    createSubSet(0)
    return res
};
