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
#Jewels and Stones
# @param {String} jewels
# @param {String} stones
# @return {Integer}
def num_jewels_in_stones(j, s)
  
  output = 0
  
  for i in 0...j.length do
    output += s.count(j[i])    
  end
  
  output
end
#XOR Operation in an Array
# @param {Integer} n
# @param {Integer} start
# @return {Integer}
def xor_operation(n, start)
  new_a = []
  for i in 0...n do
    new_a << start + 2*i
  end
  new_a.inject(:^)
end
#Check if 2 Strings =
# @param {String[]} word1
# @param {String[]} word2
# @return {Boolean}
def array_strings_are_equal(word1, word2)
  word1.join == word2.join
end
#Maximum Nesting Depth
# @param {String} s
# @return {Integer}
def max_depth(s)
  l, m = 0, 0
  s.chars do |c|
    if c == "("
      l += 1
      m = [m, l].max
    elsif c == ")"
      l -= 1
      return 0 if l.negative?
    end
  end
  return m
end
#Count of Matches
# @param {Integer} n
# @return {Integer}
def number_of_matches(n)
  count = 0
  while n > 1
      if n % 2 == 0
          n = n/2
          count += n
      else
          count += n/2
          n = n/2 + 1
      end
  end
  count     
end
#Count Good Triplets
# @param {Integer[]} arr
# @param {Integer} a
# @param {Integer} b
# @param {Integer} c
# @return {Integer}
def count_good_triplets(arr, a, b, c)
  count = 0
  for i in 0...arr.length-2
      for j in i+1...arr.length-1
          for k in j+1...arr.length
              count+=1 if (arr[i]-arr[j]).abs<=a and (arr[j]-arr[k]).abs<=b and (arr[i]-arr[k]).abs<=c
          end
      end
  end
  count
end

#find even digits
# @param {Integer[]} nums
# @return {Integer}
def find_numbers(nums)
  nums.count { |x| x.digits.size.even? }
end

#remove outermost parenthesis
# @param {String} s
# @return {String}
def remove_outer_parentheses(s)
  counter = 0
  output = Array.new
  s.split(//).each do |c|
      output << c unless (counter == 0 && c == "(") || (counter == 1 && c == ")")
      counter += 1 if c == "("
      counter -= 1 if c == ")"
  end
  output.join
end

#final price w/ discount
# @param {Integer[]} prices
# @return {Integer[]}
def final_prices(prices)
  output = []
  new_a = []
  for i in 0...prices.size - 1
    min = nil
    prices[i+1..-1].select{|v| break min = v if v <= prices[i]}
    min.nil? ? output << prices[i] : output << prices[i] - min
  end
  output << prices[-1]
  p output
end

#self dividing mumbers
# @param {Integer} left
# @param {Integer} right
# @return {Integer[]}
def self_dividing_numbers(left, right)
  result = []
  (left..right).each { |num| result << num if num.to_s.chars.all? { |digit| digit != '0' and num % digit.to_i == 0 }}
  return result
end

#number of students doing homework
# @param {Integer[]} start_time
# @param {Integer[]} end_time
# @param {Integer} query_time
# @return {Integer}
def busy_student(start_time, end_time, query_time)
  start_time.each_with_index.map { |st, i| st <= query_time && end_time[i] >= query_time ? 1 : 0 }.sum
end

#Maxiumum 69 Number
# @param {Integer} num
# @return {Integer}
def maximum69_number (num)
  new_a = num.to_s
  new_a[new_a.index("6")] = "9" if new_a.index("6") != nil
  new_a.to_i
end