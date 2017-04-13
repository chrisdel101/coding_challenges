# def exclamation(str)
#   str.split("").each do |letter|
#   if letter === "!"
#     puts letter
#     puts str
#     str.gsub(letter " ")
#   end
#   end
#
# end
#
# puts exclamation("Remove exclamation marks!")
#
#

def exclamation(str)

  str.gsub(/!/, "")
end

puts exclamation("Remove exclamation marks!")

def remove_exclamation_marks(s)
  s.delete('!')
end
