class Solution:
    def minMoves(self, nums: List[int]) -> int:
        maximum = max(nums)
        count = 0

        for i in nums:
            count += maximum-i

        return count

        
