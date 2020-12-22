# Leetcode Two Sum Answer
def two_sum(nums, target)
    table = {}
    nums.each_with_index do |num, index|
      n = target - num
      if table.include?(n)
        return [table[n], index]
      else
        table[num] = index
      end
    end
  end

#Leetcode Running Sum of 1d Array Python
class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        return [sum(nums[:i+1]) for i in range(len(nums))]

    end
end