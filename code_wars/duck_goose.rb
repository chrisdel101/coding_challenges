# def duck_duck_goose(players, goose
#
#   players.each_with_index do |player, index|
#
#   end
#
#
# end
#
# duck_duck_goose([{:name=>"james"}, {:name=>"steve"}] 2)
#
# 1.
# based on the index, this will control which hash in the array gets accessed
#
# 2.
# If goose > players.length
# each i will be equal to players. length
# # - find the number of goose
# # - loop through and find thr corresponing index + 1
# # - assign it the corresponing name in the array
# # -
# # -
# # - if goose is greater than the amount of players
#
#
# Maybe while loop?
#
# While goose, loop through until they are equal.
#
#
# Goose is target
# Duck is current_item
# array contains items
#
# 1. Loop through array, using each duck, one for each player
# 2. The loop with continue, using while, counting down until it reaches zero.
# 3. It will contiue to loop through until goose is zero.


# times loop

#
# players = ["gary", "joe", "sam", "sara", "tony"]
# goose = 7
# #
# # //////////////using modulo////////////////////////
# # modulo add modulo to the index will align it with the correct part of the array
# players.length #=> 7
# players[0] P0/ 7 % 0
# players[1] P1/ 7 % 1
# players[2] P2/ 7 % 2 [2+2+2+1] = 1
# players[3] P3/ 7 % 1 (3+3+1) = 1
# players[4] P4/ 7 % 4 (4) = 3
# players[5] P5/ 7 % 5 (5) = 2
# players[6] P6/ 7 % 6 (6) = 1
#
# goose.times do |i|
#   puts players[i % players.length]
# end

# DOES NOT WORK
# def duck_duck_goose(players, goose)
#   player = 0
#   goose.times do |i|
#     player  = players[i % players.length]
#   end
#   puts player
# end

# THIS WORKS FOR SOME REASON **WHERE DOES NAME COME FROM

def duck_duck_goose(players, goose)
  players[(goose % players.size) - 1].name
end

duck_duck_goose(["a","b", "c","d"],11)


# ///////////////////Using two operators- no modulo//////////////////
#
# Assign two operators i, k
# make i is total
# k >= array.length this is once it hits the end of the array
# k = reassigns itself to be 0

# i = 0 #iterates from 0 to goose
# k = 0 #keeps track of the number and resets to start of array.
# goose = 7
#
# while i < goose do
#   if k >= arr.length
#     k = k - arr.length
#     #of k = 0
#   end
#   puts arr[k]
#     i += 1
#     k += 1
# return k
# end

# def duck_duck_goose(players, goose)
#   arr = []
#   i = 0
#   k = 0
#   while i < goose do
#     if k >= players.length
#       k = 0
#     end
#       arr << players[k]
#       i += 1
#       k += 1
#   end
#   puts arr[arr.length]
# end
#
# duck_duck_goose(["gary", "joe", "sam", "sara", "tony"],7)
# duck_duck_goose(["gary", "joe"],2)

  # def duck_duck_goose(players, goose)
  #   i = 0
  #   k = 0
  #   while i < goose do
  #     if k >= players.length
  #       k = 0
  #     end
  #       i += 1
  #       k += 1
  #   end
  #  return players[k-1]
  # end
  #
  #
  # duck_duck_goose([a, b, c, d], 11)

  # players= ["a","b", "c","d"]
  # goose = 10
  # i = 0
  # k = 0
  #
  # while i < goose do
  #     if k >= players.length
  #       k = 0
  #     end
  #     k += 1
  #     i += 1
  # end





# LOOP TESTS

#   i = 0
#   goose = 9
# while i < goose do
#   puts goose
#     goose -=1
# end

#
# i = 0
# num = 5
#
# while i < num  do
#    puts("Inside the loop i = #i" )
#    i +=1
# end
