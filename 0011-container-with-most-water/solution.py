class Solution:
    def maxArea(self, height: list[int]) -> int:
        max_amount = 0

        left, right = 0, len(height)-1

        while left<right:
            area = min(height[left], height[right]) * (right-left)

            max_amount = max(area, max_amount)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return max_amount
