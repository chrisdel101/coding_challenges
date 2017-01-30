# Yield to a block
# def double (single)
#     yield single
# end
#
# double(1){|x| puts x * 2 }



# animals = ["cat", "dog", "duck", "cow", "donkey"]
# partition(animals){|animal| animal.size == 3}
    #=> [["cat", "dog", "cow"], ["duck", "donkey"]]

# def partition(list, &block)
#   p = Proc.new block
#   puts list.each(&p)
# end
#
# # pets = ["fish", "scorpion", "beetle", "monkey", "rock"]
# #
# # p = Proc.new {|animal| animal.size == 3}
#
# partition(["fish", "scorpion", "beetle", "monkey", "rock"]){|animal| animal.size == 3}

# list= ["fish", "scorpion", "beetle", "monkey", "rock"]
# list.sort_by{|animal| animal.size == 3}

# animals = ["cat", "dog", "duck", "cow", "donkey"]
# partition(animals){|animal| animal.size == 3}


#
# def partition(x,b)
#   p = Proc.new b
#   x.each do |i|
#     p
#   end
# end
#
# partition(["cat", "dog", "duck", "cow", "donkey"]){|animal| animal.size == 3})

def partition list, &block
  puts list.partition(&block)
end


partition(["cat", "dog", "duck", "cow", "donkey"]){|animal| animal.size == 3}
