class Solution:
    def minMoves2(self, nums: list[int]) -> int:

        nums.sort()
        
        mid = int(0+len(nums)/2)

        count = sum(abs(val-nums[mid]) for val in nums)

        return count

