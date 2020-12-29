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

#Leetcode To Lower Case
# @param {String} str
# @return {String}
def to_lower_case(str)
  alp_down = [*'a'..'z']
  alp_up = [*'A'..'Z']
  new_str = ''
  
  i = 0
  
  while i < str.length
      
      if alp_up.include?(str[i]) 
          index = alp_up.index(str[i])
          new_str += alp_down[index]
      else
          new_str += str[i]
      end
      
      i += 1
  end
  
  new_str
end

#Leetcode Shuffle String
# @param {String} s
# @param {Integer[]} indices
# @return {String}
def restore_string(s, indices)
  strings = Array.new(s.length)
  
  indices.each_with_index do |i, idx|
      strings[i] = s[idx]
  end
  
  return strings.join
end

