/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    let map = new Map()

    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], [map.get(nums[i])[0], i, map.get(nums[i])[2]+1])
        }else{
            map.set(nums[i], [i, i, 1])
        }
    }

    // console.log(map)
    let count = 0

    for(let [key, value] of map){
        if(value[2]===(value[1]-value[0])+1) count++
    }

    return count
};
