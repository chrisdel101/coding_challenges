# -check each string to make sure letters.
# -add two strings together
# -check for doubles, and remove
# -should return string of unique letters

#
# def longest(a1)
#   if (a1 =~ /[a-zA-Z]+/)
#         # && (a2 =~ /[A-Za-z]/)
#     return true
#   end
# end



# def longest(a1, a2)
#   # regex to check for letters
#   if  (!a1.match(/\A[a-zA-Z]*\z/).nil?) &&
#       (!a2.match(/\A[a-zA-Z]*\z/).nil?)
#     puts true
#   else
#     puts false
#   end
#   a1.downcase!
#   a2.downcase!
# end


# puts (longest("teteGFDsg", "ajchDEDsbcueba"))

def longest(a1, a2)
  big_s = a1 +  a2
  big_s.downcase!
  big_s.chars.sort.join.squeeze
end



  longest("teteGFDsg", "ajchDEDsbcueba")
