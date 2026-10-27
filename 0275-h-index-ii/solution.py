class Solution:
    def hIndex(self, citations: list[int]) -> int:
        left, right = 0, len(citations)-1
        res = 0

        while left <= right:
            mid = (left+right) // 2

            if citations[mid] >= len(citations)-mid:
                res = len(citations)-mid
                right = mid-1
            else:
                left = mid+1

        return res
