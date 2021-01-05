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

#Sum of All Odd Length Subarrays
# @param {Integer[]} arr
# @return {Integer}
def sum_odd_length_subarrays(arr)
  count=0
  for i in 0...arr.length
      j = i
      while j<arr.length
          count+=arr[i..j].sum
          j+=2
      end
  end
  count
end
#Balance String Split Leetcode
# @param {String} s
# @return {Integer}
def balanced_string_split(s)
  l_count = 0
  total = 0
  for i in 0...s.length
      if s[i]=='L'
          l_count += 1
      else
          l_count -= 1
      end
      total += 1 if l_count==0
  end
  total
end
#Count the Number of Consistent Strings Leetcode
# @param {String} allowed
# @param {String[]} words
# @return {Integer}
def count_consistent_strings(allowed, words)
  allowed_chars = allowed.chars
  count = 0
  words.each do |word|
      for i in 0...word.length
          if !allowed_chars.include?(word[i])
              count -= 1
              break
          end
      end
      count += 1
  end
  count
end
#Richest Customer Wealth Leetcode
# @param {Integer[][]} accounts
# @return {Integer}
def maximum_wealth(accounts)
  accounts.map(&:sum).max
end
#Shuffle the Array
# @param {Integer[]} nums
# @param {Integer} n
# @return {Integer[]}
def shuffle(nums, n)
  ret_array = Array.new(n*2)
  for i in 0...n
      ret_array[i*2]=nums[i]
      ret_array[i*2+1]=nums[i+n]
  end
  return ret_array
end
#Kids with Candy
# @param {Integer[]} candies
# @param {Integer} extra_candies
# @return {Boolean[]}
def kids_with_candies(candies, extra_candies)
  highest_candy = candies.max
  candies.map do |candy|
    candy + extra_candies >= highest_candy
  end
end
#Defange IP Address
# @param {String} address
# @return {String}
def defang_i_paddr(address)
  address.gsub '.', '[.]'
end
#Number of Good Pairs
# @param {Integer[]} nums
# @return {Integer}
def num_identical_pairs(nums)
  nums.each_with_index.reduce(0) { |sum, (el, i)| sum += nums[i+1..-1].count(el) }
end
#Goal Parser
# @param {String} command
# @return {String}
def interpret(command)
  s = ""
  l = ""
  command.each_char.with_index do |c, i|
    if c == "G"
      s += c
    else
      l += c
      if l == "()"
        s += "o"
        l = ""
      elsif l == "(al)"
        s += "al"
        l = ""
      end
    end
  end
  s
end