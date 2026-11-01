class Solution:
    def minMoves(self, nums: list[int]) -> int:
        min_of_nums = min(nums)
        count = 0

        for i in nums:
            count += i - min_of_nums

        return count

        
