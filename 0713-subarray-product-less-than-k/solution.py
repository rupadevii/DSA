class Solution:
    def numSubarrayProductLessThanK(self, nums: list[int], k: int) -> int:
        if k <= 1:
            return 0
        
        left, count = 0, 0

        product = 1

        for index, right in enumerate(nums):
            product *= right

            while product >= k:
                product /= nums[left]
                left += 1

            count += index-left+1

        
        return count
        
