/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.numbers = nums;
    this.prefixSum = []
    this.prefixSum[0] = this.numbers[0]
    for(let i=1; i<this.numbers.length; i++){
        this.prefixSum[i] = this.prefixSum[i-1] + this.numbers[i]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return left===0? this.prefixSum[right] : this.prefixSum[right]-this.prefixSum[left-1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
